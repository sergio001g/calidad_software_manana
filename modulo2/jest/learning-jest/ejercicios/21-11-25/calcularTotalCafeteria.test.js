
const { calcularCompraLecciones } = require('./calcularTotalCafeteria');

describe('Compra de lecciones Duolingo', () => {
  it('calcula subtotal, descuento y total con números enteros', () => {
    const lecciones = [
      { nombre: 'Lección Básico A1', precioUnitario: 100, cantidad: 2 },
      { nombre: 'Lección Gramática', precioUnitario: 80, cantidad: 1 }
    ];
    const { subtotal, descuento, total } = calcularCompraLecciones(lecciones, 10);
    expect(subtotal).toBeCloseTo(280, 5);
    expect(descuento).toBeCloseTo(28, 5);
    expect(total).toBeCloseTo(252, 5);
  });

  it('acepta strings numéricos para precio y cantidad', () => {
    const lecciones = [
      { nombre: 'Lección Avanzado', precioUnitario: '150.5', cantidad: '3' }
    ];
    const { subtotal, descuento, total } = calcularCompraLecciones(lecciones, 5);
    expect(subtotal).toBeCloseTo(451.5, 5);
    expect(descuento).toBeCloseTo(22.575, 5);
    expect(total).toBeCloseTo(428.925, 5);
  });

  it('con descuento 0, el total es igual al subtotal', () => {
    const lecciones = [{ nombre: 'Lección Básica', precioUnitario: 50, cantidad: 1 }];
    const { descuento, total } = calcularCompraLecciones(lecciones, 0);
    expect(descuento).toBeCloseTo(0, 5);
    expect(total).toBeCloseTo(50, 5);
  });

  it('lanza TypeError si lecciones no es un arreglo', () => {
    expect(() => calcularCompraLecciones(null, 10)).toThrow(TypeError);
    expect(() => calcularCompraLecciones(null, 10)).toThrow('items invalido');
    expect(() => calcularCompraLecciones('no-array', 10)).toThrow('items invalido');
  });

  it('lanza TypeError si descuento no está entre 0 y 100', () => {
    const lecciones = [{ nombre: 'Lección', precioUnitario: 100, cantidad: 1 }];
    expect(() => calcularCompraLecciones(lecciones, -5)).toThrow(TypeError);
    expect(() => calcularCompraLecciones(lecciones, -5)).toThrow('descuento invalido');
    expect(() => calcularCompraLecciones(lecciones, 101)).toThrow('descuento invalido');
    expect(() => calcularCompraLecciones(lecciones, 'x')).toThrow('descuento invalido');
  });

  it('lanza TypeError si un item tiene datos inválidos', () => {
    expect(() => calcularCompraLecciones([{ nombre: '', precioUnitario: 100, cantidad: 1 }], 10))
      .toThrow('item invalido');
    expect(() => calcularCompraLecciones([{ nombre: 'Lección', precioUnitario: -10, cantidad: 1 }], 10))
      .toThrow('item invalido');
    expect(() => calcularCompraLecciones([{ nombre: 'Lección', precioUnitario: 100, cantidad: 'abc' }], 10))
      .toThrow('item invalido');
  });
});