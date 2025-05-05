export function dissolveDDD(tel: string) {
  if (!tel || typeof tel !== 'string') {
    throw new Error(`Numero de telefone não informado ou inválido`);
  }

  const ddd = tel.slice(0, 2);
  const numero = tel.slice(2);

  // Verifica se o DDD é válido
  if (ddd.length !== 2 || isNaN(Number(ddd))) {
    throw new Error(`DDD ou número inválido: DDD=${ddd}`);
  }

  // Verifica se o número é válido
  if (numero.length < 8 || numero.length > 9 || isNaN(Number(numero))) {
    throw new Error(`DDD ou número inválido: DDD=${ddd}, Numero=${numero}`);
  }

  return { ddd, numero };
}
