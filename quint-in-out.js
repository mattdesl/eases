function qinticInOut(t) {
  return t < 0.5
    ? +16.0 * Math.pow(t, 5.0)
    : -0.5 * Math.pow(2.0 * t - 2.0, 5.0) + 1.0
}

module.exports = qinticInOut