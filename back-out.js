function backOut(t) {
  var f = 1 - t;
  return 1 - (Math.pow(f, 3) - f * Math.sin(f * Math.PI))
}

module.exports = backOut
