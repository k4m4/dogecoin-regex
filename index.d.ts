declare namespace dogecoinRegex {
    interface Options {
        /**
        Only match an exact string. By default, it matches any DOGE addresses in a string. Useful with `RegExp#test()` to check if a string is an DOGE address.
        @default false
        */
        readonly exact?: boolean;
    }
}

/**
Returns a regex for matching Dogecoin (DOGE) addresses.
@example
```
import dogecoinRegex = require('dogecoin-regex')
dogecoinRegex().test('nodejsrocks DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o');
//=> true
```
*/
declare function dogecoinRegex(options?: dogecoinRegex.Options): RegExp;

export = dogecoinRegex;