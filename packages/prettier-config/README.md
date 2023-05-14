# prettier-config-staples

A comprehensive Prettier config with opinionated defaults.

## Usage

### Install

```bash
$ npm i -D prettier-config-staples
```

### Use in `package.json`

```jsonc
{
  // ...
  "prettier": "prettier-config-staples"
}
```

### Extend in `.prettierrc.js`

```js
const staples = require('prettier-config-staples');

module.exports = {
  ...staples,
  'single-quote': false,
};
```
