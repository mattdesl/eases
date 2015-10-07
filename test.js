var eases = require('./')
var test = require('tape').test

var outsideRange = [
  'elasticIn', 'elasticOut', 'elasticInOut',
  'backIn', 'backOut', 'backInOut',
  'bounceIn', 'bounceOut', 'bounceInOut',
]

test('eases return number between 0 and 1', function (t) {
  for (var k in eases) {
    var f = eases[k]
    if (outsideRange.indexOf(k) === -1) {
      t.equal(f(1), 1, k)
      t.equal(f(0), 0, k)
    }
  }
  t.end()
})
