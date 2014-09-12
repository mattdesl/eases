function backInOut(t) {
  var f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0)

  var g = Math.pow(f, 3.0) - f * Math.sin(f * Math.PI)

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5
}

module.exports = backInOut