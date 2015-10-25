# generator-vdom

Generator for `virtual-dom` / `mercury` components. 


## Install

Fork this repo, clone, customize, `npm link`.

```bash
$ git clone https://github.com/nichoth/generator-vdom.git
$ cd generator-vdom
$ npm link
```

## Use ##

    $ cd my-project && yo vdom


## Example Output

```
├── vdom-compoent/
│   ├── example.js
│   └── index.html
├── node_modules/
├── Component.js
├── package.json
├── readme.md
└── server.js
```

Component.js:

```js
var h = require('virtual-dom/h');
var state = require('@nichoth/state');

module.exports = Component;

function Component(opts) {
  var s = state({

  });
  return s;
}

Component.render = function(state) {
  return h('div', []);
};

```

package.json:

```json
{
  "name": "vdom-example",
  "description": "my description",
  "main": "Example.js",
  "version": "0.0.0",
  "keywords": [
    "virtual-dom",
    "mercury",
    "component",
    "ui"
  ],
  "browserify": {
    "transform": []
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "browserify -d example/example.js > example/bundle.js",
    "watch": "watchify example/example.js -o example/bundle.js -dv",
    "dev": "npm run watch & npm run server",
    "postversion": "git push && git push --tags",
    "server": "node server.js",
    "demo": "browserify example/example.js > example/bundle.js && html-inline example/index.html | curl -sT- https://htmlb.in"
  },
  "author": "...",
  "repository": {
    "type": "git",
    "url": "https://github.com/nichoth/bla.git"
  },
  "license": "ISC",
  "peerDependencies": {},
  "devDependencies": {
    "main-loop": "^1.1.1",
    "ecstatic": "^0.8.0"
  },
  "dependencies": {
    "@nichoth/state": "0.0.0",
    "virtual-dom": "^1.0.0"
  }
}
```
