# dogecoin-regex [![Build Status](https://travis-ci.org/k4m4/dogecoin-regex.svg?branch=master)](https://travis-ci.org/k4m4/dogecoin-regex)

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


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)