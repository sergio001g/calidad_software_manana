const { calcularGemasYBonificacion } = require('./calcularPropina');

describe('Gemas y bonificación Duolingo', () => {
  it('calcula gemas base y bonificación con números enteros', () => {
    const { gemasBase, bonificacionGemas, gemasTotales } = calcularGemasYBonificacion(100, 5);
    expect(gemasBase).toBeCloseTo(100, 5);
    expect(bonificacionGemas).toBeCloseTo(10, 5); // 100 * 0.10
    expect(gemasTotales).toBeCloseTo(110, 5);
  });

  it('acepta strings numéricos para ganadas y días', () => {
    const { gemasBase, bonificacionGemas, gemasTotales } = calcularGemasYBonificacion('200.7', '15');
    expect(gemasBase).toBeCloseTo(200, 5); // Math.floor
    expect(bonificacionGemas).toBeCloseTo(60, 5); // 200 * 0.30
    expect(gemasTotales).toBeCloseTo(260, 5);
  });

  it('con racha 0, no hay bonificación', () => {
    const { gemasBase, bonificacionGemas, gemasTotales } = calcularGemasYBonificacion(80, 0);
    expect(bonificacionGemas).toBeCloseTo(0, 5);
    expect(gemasTotales).toBeCloseTo(80, 5);
  });

  it('lanza TypeError si ganadas no es > 0', () => {
    expect(() => calcularGemasYBonificacion(0, 10)).toThrow(TypeError);
    expect(() => calcularGemasYBonificacion(0, 10)).toThrow('cuenta invalida');
    expect(() => calcularGemasYBonificacion(-50, 10)).toThrow('cuenta invalida');
    expect(() => calcularGemasYBonificacion('abc', 10)).toThrow('cuenta invalida');
  });

  it('lanza TypeError si días no está entre 0 y 365', () => {
    expect(() => calcularGemasYBonificacion(100, -1)).toThrow(TypeError);
    expect(() => calcularGemasYBonificacion(100, -1)).toThrow('porcentaje invalido');
    expect(() => calcularGemasYBonificacion(100, 366)).toThrow('porcentaje invalido');
    expect(() => calcularGemasYBonificacion(100, 'x')).toThrow('porcentaje invalido');
  });
});