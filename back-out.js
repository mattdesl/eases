function backOut(t) {
  var f = 1.0 - t
  return 1.0 - (Math.pow(f, 3.0) - f * Math.sin(f * Math.PI))
}

module.exports = backOut