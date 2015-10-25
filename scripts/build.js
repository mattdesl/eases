var fs = require( 'fs' );
var path = require( 'path' );
var rollup = require( 'rollup' );

var modules = fs.readdirSync( 'src' ).filter( function ( file ) {
	return path.extname( file ) === '.js';
});

// for each file, generated a CommonJS module in the
// root directory, so people can do things like
// var bounceOut = require( 'eases/bounce-out' )
var lib = modules.reduce( function ( promise, module ) {
	return promise.then( function () {
		return rollup.rollup({ entry: 'src/' + module })
			.then( function ( bundle ) {
				return bundle.write({
					dest: module,
					format: 'cjs',
					useStrict: false
				});
			});
	});
}, { then: function ( fn ) { return fn(); } });

// generate a UMD build and an ES6 build containing
// the whole library
lib.then( function () {
	rollup.rollup({ entry: 'src/index.js' })
		.then( function ( bundle ) {
			bundle.write({
				dest: 'dist/eases.umd.js',
				format: 'umd',
				moduleName: 'eases'
			});

			bundle.write({
				dest: 'dist/eases.es6.js',
				format: 'es6'
			});
		});
});
