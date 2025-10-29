const { promedioConFor, promedioConWhile } = require('./punto2');

describe('Promedio para el punto 2 no es ai ', () => {
  it('calcula 4 cuando la lista es [2, 4, 6]', () => {
    const numeros = [2, 4, 6];
    expect(promedioConFor(numeros)).toBe(4);
    expect(promedioConWhile(numeros)).toBe(4);
  });

  it('acepta y calcula 20 con ["10", "20", 30]', () => {
    const numeros = ['10', '20', 30];
    expect(promedioConFor(numeros)).toBe(20);
    expect(promedioConWhile(numeros)).toBe(20);
  });

  it('promedio de [10,20] es 15', () => {
    const numeros = [10, 'abc', null, undefined, NaN, 20];
    expect(promedioConFor(numeros)).toBe(15);
    expect(promedioConWhile(numeros)).toBe(15);
  });

  it('devuelve 0', () => {
    expect(promedioConFor([])).toBe(0);
    expect(promedioConWhile([])).toBe(0);
  });

  it('while', () => {
    const numeros = [1.5, 2.5, 3.0];
    expect(promedioConFor(numeros)).toBeCloseTo(2.3333, 4);
    expect(promedioConWhile(numeros)).toBeCloseTo(2.3333, 4);
  });
});