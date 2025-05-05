import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

export class StrapiAuthService {
  private url: string;

  constructor(url: string) {
    this.url = url;
    if (!this.url) {
      throw new Error('Url do Strapi não definida!');
    }
  }

  async login(identifier: string, password: string) {
    try {
      const response = await axios.post(`${this.url}/api/auth/local`, {
        identifier,
        password,
      });

      return response.data.jwt;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      throw new Error('Usuário ou senha invalidos');
    }
  }
  async generateToken(req: Request, res: Response) {
    const authorization = req.headers.authorization?.split(' ')[1];
    if (!authorization) {
      return res.status(401).json({ message: 'Token nao fornecido.' });
    }

    try {
      // Verifica se o token fornecido é válido e, se for, retorna as informações do usuário
      const response = await axios.get(`${this.url}/api/users/me`, {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      if (response.status !== 200) throw response;
      return authorization;
    } catch (err) {
      if (err instanceof Error) return res.status(401).json({ error: err.message });
    }
  }
  tokenVerify = async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req);
    if (req.url === '/api/strapi/login') {
      return next();
    }
    try {
      const jwt = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (!jwt) {
        throw new Error('Token não informado');
      }

      const response = await axios.get(`${this.url}/api/users/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      if (response && response.status !== 200) {
        // console.error('Erro ao checar token: ', response.statusText);
        throw new Error(response.statusText);
      }

      return next();
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ [error.name]: error.message });
        return false;
      }
    }
  };
}
