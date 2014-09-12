var eases = require('./')
var test = require('tape').test

//ensuring they all export and pass syntax
test('eases pass syntax', function(t) {
	for (var k in eases) {
		var f = eases[k]
		t.equal(typeof f, 'function', k+' is function')
		if (typeof f === 'function')
			t.equal(typeof f(0.5), 'number', k+' returns number')
	}
	t.end()
})

//need more tests for each...