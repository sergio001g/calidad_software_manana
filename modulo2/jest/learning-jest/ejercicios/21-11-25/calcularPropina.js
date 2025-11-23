// App estilo Duolingo: calcula gemas y bonificación por racha
function calcularGemasYBonificacion(ganadas, rachaDias = 0) {
  const numGanadas = Number(ganadas);
  if (!Number.isFinite(numGanadas) || numGanadas <= 0) {
    throw new TypeError('cuenta invalida');
  }
  const dias = Number(rachaDias);
  if (!Number.isFinite(dias) || dias < 0 || dias > 365) {
    throw new TypeError('porcentaje invalido');
  }

  const gemasBase = Math.floor(numGanadas);
  const bonifPorcentaje = Math.min(dias * 2, 100); // max 100 % extra
  const bonifGemas = gemasBase * (bonifPorcentaje / 100);
  const gemasTotales = gemasBase + bonifGemas;

  return { gemasBase, bonificacionGemas: bonifGemas, gemasTotales };
}

module.exports = { calcularGemasYBonificacion };