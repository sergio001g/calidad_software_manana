const { toTitleCase, padLeft } = require('./string_formats');

describe('string_formats utils', () => {
  test('toTitleCase formats words to Title Case', () => {
    expect(toTitleCase('hola mundo')).toBe('Hola Mundo');
    expect(toTitleCase('JEST PRUEBAS')).toBe('Jest Pruebas');
  });

  test('padLeft pads with spaces by default', () => {
    expect(padLeft('42', 5)).toBe('   42');
  });

  test('padLeft pads with custom char', () => {
    expect(padLeft('7', 3, '0')).toBe('007');
  });
});