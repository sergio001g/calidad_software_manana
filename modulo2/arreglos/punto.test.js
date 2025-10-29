const { edadesMayores } = require('./punto');

describe('edadesMayores', () => {
  describe('umbral por defecto (18)', () => {
    test('devuelve edades mayores o iguales a 18', () => {
      const edades = [15, 18, 21, 10];
      expect(edadesMayores(edades)).toEqual([18, 21]);
    });
  });

  describe('umbral personalizado', () => {
    test('filtra usando el umbral indicado', () => {
      const edades = [17, 18, 19, 25];
      expect(edadesMayores(edades, 19)).toEqual([19, 25]);
    });
  });

  describe('normalización de entradas', () => {
    test('convierte strings numéricos a número', () => {
      const edades = ['20', '17', 18];
      expect(edadesMayores(edades)).toEqual([20, 18]);
    });

    test('descarta valores no numéricos y NaN', () => {
      const edades = [null, undefined, 'abc', NaN, 22];
      expect(edadesMayores(edades)).toEqual([22]);
    });
  });

  describe('casos borde', () => {
    test('arreglo vacío devuelve arreglo vacío', () => {
      expect(edadesMayores([])).toEqual([]);
    });
  });
});