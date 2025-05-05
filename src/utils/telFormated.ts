import { dissolveDDD } from './dissolveDDD';

export function telFormated(item: string) {
  if (!item || typeof item !== 'string') {
    throw new Error('Numero de telefone não informado ou inválido');
  }
  const { ddd, numero } = dissolveDDD(item);
  return `${ddd}|${numero}`;
}
