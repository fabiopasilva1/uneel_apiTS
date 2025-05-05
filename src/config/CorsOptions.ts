import { Request } from 'express';
import { middleware } from './middleware';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const CorsOptions = (req: Request, callback: Function) => {
  const cors = middleware.find((m) => m.name === 'api::cors');
  if (!cors) {
    return callback(new Error('CORS middleware não encontrado.'), { origin: false });
  }

  const allowlist = [...(cors.origins || [])]; // lista de origens permitidas
  const allowMethods = [...(cors.methods || [])]; // lista de métodos permitidos
  const allowUseAgent = [...(cors.userAgent || [])]; // lista de user-agents permitidos
  if (!cors.enable) return callback(null, { origin: false }); // se CORS estiver desativado, retorna false para origin

  try {
    const origin = req.headers['origin']; // pega a origem da requisição
    const userAgent = req.headers['user-agent']; // pega o user-agent da requisição
    const methods = req.method; // pega o método da requisição

    if (
      (origin === undefined && // se a origem não for informada
        userAgent &&
        allowUseAgent.includes(userAgent.split('/')[0])) || // e o user-agent for permitido
      allowUseAgent.includes('*') // ou se for permitido todos os user-agents
    ) {
      if (allowMethods.includes(methods) || allowMethods.includes('*')) {
        // se o método for permitido
        if ((origin && allowlist.includes(origin)) || allowlist.includes('*')) {
          // e a origem for permitida
          callback(null, {
            origin: true, // permite a origem
            methods: cors.methods, // permite os métodos
          });
        } else {
          callback(new Error('Origem não permitida pelo CORS'), {
            origin: false,
          });
        }
      } else {
        callback(new Error('Método não permitido pelo CORS'), {
          origin: false,
        });
      }
    } else {
      callback(new Error('User-Agent não permitido pelo CORS'), {
        origin: false,
      });
    }
  } catch (err) {
    console.log(err);
    callback(new Error('Erro interno do servidor'), { origin: false });
  }
};

export { CorsOptions };
