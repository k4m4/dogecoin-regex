import test from 'ava';
import m from '.';

const fixtures = [
	'DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o',
	'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
	'DP5mjk9SEYtzhnhkkC24PEjxNtDN7JGRx3',
	'D8EyEfuNsfQ3root9R3ac54mMcLmoNBW6q',
	'DFN5b3Usara4aZAvhT6muXd3hR49d5zxio'
];

const fixturesNot = [
	'0x6f46cf5569aefa1acc1009290c8e043747172d89',
	'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
	'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
	'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
	'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
	'nikolaskam{at}gmail{dot}com'
];

test('Exact DOGE addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact DOGE addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}

	t.is(m().exec('dogecoin:DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o')[0], 'DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o');
});

test('Non-DOGE addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});
