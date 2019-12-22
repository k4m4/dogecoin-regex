import {expectType} from 'tsd';
import dogecoinRegex = require('.');

expectType<RegExp>(dogecoinRegex());
expectType<RegExp>(dogecoinRegex({exact: true}));