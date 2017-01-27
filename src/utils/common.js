/* eslint no-console: "off" */
import R from 'ramda';
export const logI      = function (x) { console.log (x); return x; };
export const logE      = function (x) { console.error (x); return x; };
export const logS      = function (x) { console.log (R.toString(x)); return x; };
export const id        = function (x) { return x; };
export const konst     = R.curry (function (a, _) { return a; });
export const du        = function (M) { return function () { return R.apply (R.pipe, arguments)(M.of ({})); }; };
export const bind      = function (a) { return R.chain (konst (a)); };
export const chain     = R.chain;
export const map       = R.map;
export const ap        = R.curry (function (ma, mf) { return mf.ap (ma); });
export const random    = R.curry (function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; });
export const prettyPrice = price => '$' + (price.toString ().indexOf ('.') >= 0 ? (price.toString ().split ('.')[1].length === 2 ? price : price + '0') : price + '.00');
