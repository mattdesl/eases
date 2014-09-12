function circInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0)
}

module.exports = circInOut