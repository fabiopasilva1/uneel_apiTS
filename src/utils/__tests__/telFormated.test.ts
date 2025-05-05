import { telFormated } from '../';

describe('telFormated', () => {
  it('Shold return String(ddd|number)', () => {
    expect(telFormated('1141414141')).toEqual('11|41414141');
  });
  it('Shold throw an error if the phone is not provided', () => {
    expect(() => telFormated('')).toThrow('Numero de telefone não informado ou inválido');
  });
});
