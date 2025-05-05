import { MSSQLService } from '../services/MSSQLService';
import { telFormated } from '../utils';

type TData = {
  telefone: [];
  cpf: [];
};

export class SPQuery {
  private mssqlService: MSSQLService;

  constructor(mssqlService: MSSQLService) {
    this.mssqlService = mssqlService;
  }
  private async Tellist(data: TData) {
    if (data.telefone.length === 0) throw new Error('Array de telefones vazia');
    return data.telefone
      .map((tel) => {
        return telFormated(tel);
      })
      .filter((tel) => tel !== null)
      .join(',');
  }

  private Cpflist(data: TData) {
    return data.cpf
      .filter((c) => c)
      .map((c) => `${String(c).padStart(11, '0')}`)
      .join(', ');
  }

  async spTel(data: TData) {
    const lista = await this.Tellist(data);

    if (!lista) throw new Error('Lista inválida');

    return await this.mssqlService.executeSP('sp_BuscarDadosPorTelefones', { ListaTelefones: lista });
  }
  async spCpf(data: TData) {
    return await this.mssqlService.executeSP('BuscarContatosPorCPFs', { CPFs: this.Cpflist(data) });
  }
}
