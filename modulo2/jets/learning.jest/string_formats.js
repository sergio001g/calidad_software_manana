function toTitleCase(str) {
  return String(str)
    .toLowerCase()
    .split(/\s+/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

function padLeft(str, length, char = ' ') {
  const s = String(str);
  if (s.length >= length) return s;
  return char.repeat(length - s.length) + s;
}

module.exports = { toTitleCase, padLeft };