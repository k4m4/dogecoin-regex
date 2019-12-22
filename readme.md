# dogecoin-regex [![Build Status](https://travis-ci.org/k4m4/dogecoin-regex.svg?branch=master)](https://travis-ci.org/k4m4/dogecoin-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching Dogecoin (DOGE) addresses.


## Install

```
~ ❯❯❯ npm install dogecoin-regex
```


## Usage

```js
const dogecoinRegex = require('dogecoin-regex');

dogecoinRegex().test('nodejsrocks DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o');
//=> true

dogecoinRegex({exact: true}).test('nodejsrocks DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o foo');
//=> false

dogecoinRegex({exact: true}).test('DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o');
//=> true

'nodejsrocks DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o unicorn DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG rainbow'.match(dogecoinRegex());
//=> ['DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o', 'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG']
```


## API

### dogecoinRegex([options])

Returns a regex for matching Dogecoin (DOGE) addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any DOGE address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an DOGE address.


## Related

- [ethereum-regex](https://github.com/k4m4/ethereum-regex) - Regular expression for matching Ethereum (ETH) addresses.
- [litecoin-regex](https://github.com/k4m4/litecoin-regex) - Regular expression for matching Litecoin (LTC) addresses.
- [bitcoincash-regex](https://github.com/k4m4/bitcoincash-regex) - Regular expression for matching Bitcoin Cash (BCH) addresses.
- [monero-regex](https://github.com/k4m4/monero-regex) - Regular expression for matching Monero (XMR) addresses.
- [dash-regex](https://github.com/k4m4/dash-regex) - Regular expression for matching Dash addresses.
- [ripple-regex](https://github.com/k4m4/ripple-regex) - Regular expression for matching Ripple (XRP) addresses.
- [neo-regex](https://github.com/k4m4/neo-regex) - Regular expression for matching NEO addresses.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)