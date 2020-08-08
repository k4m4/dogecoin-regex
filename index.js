'use strict';
const re = 'D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
