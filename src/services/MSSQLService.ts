import sql, { Connection, Request, RequestError } from 'mssql';
interface ResultType {
  // Defina as propriedades esperadas do resultado aqui
  [key: string]: string | unknown; // Use isso se você não souber a estrutura exata
}
export class MSSQLService {
  private config: sql.config;
  private _poolPromise: Connection;

  constructor(config: sql.config) {
    this.config = config;
  }
  get poolPromise() {
    if (!this._poolPromise) {
      return this.initializePool().then(() => this._poolPromise);
    }
    return this._poolPromise;
  }
  setupEventListeners(pool: Connection) {
    pool.on('connect', () => {
      console.log('MSSQL pool connected (event)');
    });

    pool.on('error', async (err: RequestError) => {
      console.error('MSSQL pool error (event):', err);
      if (['ECONNCLOSED', 'ELOGIN'].includes(err.code)) {
        console.warn('Pool connection lost (event), reinitializing...');
        this._poolPromise = null;
        await this.initializePool();
      }
    });
  }
  async initializePool() {
    try {
      if (!this._poolPromise) {
        this._poolPromise = sql.connect(this.config); // Ajuste para usar mssqlConfig diretamente
        const pool = await this._poolPromise;
        await pool.connect();
        console.log('MSSQL pool initialized by adapter');
        this.setupEventListeners(pool);
      }
    } catch (err) {
      console.error('Failed to initialize MSSQL pool in adapter:', err);
      this._poolPromise = null;
    }
  }

  async executeQuery(query: string) {
    const pool = await sql.connect(this.config);
    const result = await pool.request().query(query);
    await pool.close();
    return result.recordset;
  }

  public async executeSP(
    procedureName: string,
    params: Record<string, unknown> = {},
    signal?: AbortSignal,
  ): Promise<ResultType[]> {
    const maxRetries = 3;
    let attempt = 0;
    let request: Request;
    let abortHandler: () => void = () => {}; // Inicializa como uma função vazia

    while (attempt < maxRetries) {
      try {
        const pool = await this.poolPromise; // Certifique-se de que o pool está disponível
        if (!pool) {
          throw new Error('Pool de conexões não disponível.');
        }

        request = pool.request();

        // Adiciona parâmetros
        for (const [key, value] of Object.entries(params)) {
          request.input(key, value);
        }

        // Verifica se o sinal de abortar foi acionado antes de executar a consulta
        if (signal?.aborted) {
          const abortErr = new Error('Execução abortada pelo cliente.') as RequestError;
          abortErr.name = 'AbortError';
          abortErr.code = 'ABORT_ERROR';
          throw abortErr;
        }

        if (signal) {
          abortHandler = () => {
            console.warn('Sinal de abort recebido. Tentando cancelar a execução...');
            if (request.cancel) request.cancel();
          };
          signal.addEventListener('abort', abortHandler);
        }

        const startTime = Date.now();
        const result = await request.execute(procedureName);
        console.log(procedureName);
        console.log(`Procedure ${procedureName} executada em ${Date.now() - startTime}ms`);
        return result.recordset;
      } catch (err) {
        if (err instanceof Error) {
          if (signal?.aborted && err.name === 'AbortError') {
            console.log('Execução foi abortada conforme solicitado. Interrompendo retries.');
            throw err;
          }

          attempt++;
          console.warn(`Tentativa ${attempt}/${maxRetries} falhou: ${err.message}`);

          if (attempt === maxRetries) {
            throw new Error(`Execução de ${procedureName} falhou após ${maxRetries} tentativas: ${err.message}`);
          }

          await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
          this._poolPromise = null; // Reinicializa o pool em caso de falha
        }
      } finally {
        if (signal) {
          signal.removeEventListener('abort', abortHandler);
        }
      }
    }

    throw new Error('Falha inesperada: execução de procedure não deveria atingir esse ponto.');
  }
}
