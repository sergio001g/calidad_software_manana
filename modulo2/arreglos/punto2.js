
function promedioConFor(numeros = []) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('Se esperaba un arreglo de números');
  }

  if (numeros.length === 0) return 0;

  let sumaTotal = 0;
  let cantidadValidos = 0;

  for (let indice = 0; indice < numeros.length; indice++) {
    const valor = numeros[indice];
    const limpio = typeof valor === 'string' ? valor.trim() : valor;
    let numero;
    if (typeof limpio === 'number') {
      numero = limpio;
    } else if (typeof limpio === 'string') {
      if (limpio === '') continue; // ignorar string vacío
      numero = Number(limpio);
    } else {
      continue; // ignorar null, undefined y otros tipos
    }

    if (Number.isFinite(numero)) {
      sumaTotal += numero;
      cantidadValidos += 1;
    }
  }

  return cantidadValidos === 0 ? 0 : sumaTotal / cantidadValidos;
}

// Calcula el promedio de un arreglo de números (o strings numéricos).
// Versión con bucle WHILE.
function promedioConWhile(numeros = []) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('Se esperaba un arreglo de números');
  }

  if (numeros.length === 0) return 0;

  let sumaTotal = 0;
  let cantidadValidos = 0;
  let indice = 0;

  while (indice < numeros.length) {
    const valor = numeros[indice];
    const limpio = typeof valor === 'string' ? valor.trim() : valor;
    let numero;
    if (typeof limpio === 'number') {
      numero = limpio;
    } else if (typeof limpio === 'string') {
      if (limpio === '') { indice += 1; continue; }
      numero = Number(limpio);
    } else {
      indice += 1; continue;
    }

    if (Number.isFinite(numero)) {
      sumaTotal += numero;
      cantidadValidos += 1;
    }
    indice += 1;
  }

  return cantidadValidos === 0 ? 0 : sumaTotal / cantidadValidos;
}

module.exports = { promedioConFor, promedioConWhile };