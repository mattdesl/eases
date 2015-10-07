# eases

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This is a grab-bag of [Robert Penner's easing equations](http://www.robertpenner.com/easing/), most of the code from [glsl-easings](https://www.npmjs.org/package/glsl-easings). Pull requests for optimizations are welcome. 

```js
//require all eases
var quadIn = require('eases').quadIn

//require only the single function
var quadIn = require('eases/quad-in')
```

## Usage

[![NPM](https://nodei.co/npm/eases.png)](https://nodei.co/npm/eases/)

Each easing has its own file which can be required individually. The entry point also exports all eases with camelCase, so `require('eases/expo-in-out')` becomes `require('eases').expoInOut`.

Full list of eases:

```js
require('eases/back-in-out')
require('eases/back-in')
require('eases/back-out')
require('eases/bounce-in-out')
require('eases/bounce-in')
require('eases/bounce-out')
require('eases/circ-in-out')
require('eases/circ-in')
require('eases/circ-out')
require('eases/cubic-in-out')
require('eases/cubic-in')
require('eases/cubic-out')
require('eases/elastic-in-out')
require('eases/elastic-in')
require('eases/elastic-out')
require('eases/expo-in-out')
require('eases/expo-in')
require('eases/expo-out')
require('eases/linear')
require('eases/quad-in-out')
require('eases/quad-in')
require('eases/quad-out')
require('eases/quart-in-out')
require('eases/quart-in')
require('eases/quart-out')
require('eases/quint-in-out')
require('eases/quint-in')
require('eases/quint-out')
require('eases/sine-in-out')
require('eases/sine-in')
require('eases/sine-out')
```

All easing functions only remap a time value, and all have the same signature.

#### ```v = ease(t)```

Where `t` is typically a value between 0 and 1, and it returns a new float that has been eased. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/eases/blob/master/LICENSE.md) for details.
