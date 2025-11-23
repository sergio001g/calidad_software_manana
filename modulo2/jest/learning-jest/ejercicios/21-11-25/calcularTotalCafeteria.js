// App estilo Duolingo: calcula precio de lecciones con descuento por paquete
function calcularCompraLecciones(lecciones, descuentoPorcentaje = 0) {
  if (!Array.isArray(lecciones)) throw new TypeError('items invalido');
  if (typeof descuentoPorcentaje !== 'number' || descuentoPorcentaje < 0 || descuentoPorcentaje > 100) {
    throw new TypeError('descuento invalido');
  }

  let subtotal = 0;
  for (const item of lecciones) {
    if (!item || typeof item.nombre !== 'string' || item.nombre.trim().length === 0) throw new TypeError('item invalido');
    const precio = Number(item.precioUnitario);
    const cantidad = Number(item.cantidad);
    if (!Number.isFinite(precio) || precio < 0 || !Number.isFinite(cantidad) || cantidad < 0) {
      throw new TypeError('item invalido');
    }
    subtotal += precio * cantidad;
  }

  const descuento = subtotal * (descuentoPorcentaje / 100);
  const total = subtotal - descuento;

  return { subtotal, descuento, total };
}

module.exports = { calcularCompraLecciones };