function edadesMayores(edades = [], umbral = 18) {
  const limite = Number(umbral);
  return edades
    .map((v) => Number(typeof v === 'string' ? v.trim() : v))
    .filter((n) => Number.isFinite(n) && n >= limite);
}

module.exports = { edadesMayores };