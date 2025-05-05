// src/utils/dissolveDDD.test.ts

import { dissolveDDD } from '../';

describe('dissolveDDD', () => {
  it('should return DDD and number correctly for a valid phone number', () => {
    const result = dissolveDDD('11987654321');
    expect(result).toEqual({ ddd: '11', numero: '987654321' });
  });

  it('should throw an error if the phone number is not provided', () => {
    expect(() => dissolveDDD('')).toThrow('Numero de telefone não informado ou inválido');
  });

  it('should throw an error if the number is too short', () => {
    expect(() => dissolveDDD('119')).toThrow('DDD ou número inválido: DDD=11, Numero=');
  });

  it('should throw an error if the number is too long', () => {
    expect(() => dissolveDDD('119876543210')).toThrow(/DDD ou número inválido: DDD=\d{2}, Numero=\d+/);
  });
  it('should throw an error if the DDD is too Invalid', () => {
    expect(() => dissolveDDD('1')).toThrow(/DDD ou número inválido: DDD=\d{1}/);
  });
});
