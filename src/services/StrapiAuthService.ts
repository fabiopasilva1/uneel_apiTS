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
      console.log(error);
      throw new Error('Usuário ou senha invalidos');
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
