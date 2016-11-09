/* 
  CallAPIObj {
   endpoint: String
  ,method: POST | GET | PUT | PATCH | DELETE
  ,types: [String]
  ,headers: {String} ** Optional ** 
  }
*/

import * as types   from './actionTypes';
import * as R       from 'ramda';
import { CALL_API } from 'redux-api-middleware';

const 
  logI      = function (x) { console.log (x); return x; },
  id        = function (x) { return x; },
  konst     = R.curry (function (a, b) { return a; }),
  du        = function (M) { return function () { return R.apply (R.pipe, arguments)(M.of ({})); }; },
  bind      = function (a) { return R.chain (konst (a)); },
  chain     = R.chain,
  map       = R.map,
  random    = R.curry (function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }),

  extractResults = (a, s, res) => res.json ().then (json =>  R.prop ('results', json)),
  callAPI = R.curry ((endpoint, method, actions, headers, body = null) => {
    var obj = { endpoint, method, types: actions, headers }
    if (R.isNil(body) === false) { return { [CALL_API]: R.assoc('body', body, obj) } }
    return { [CALL_API]: obj }
  });

export const
//updateKeyPath :: [Strings] -> String -> UpdateKeyPathObj
  updateKeyPath = R.curry(function(path, value) {
    return {
      type: types.BLANK_UPDATE_KEY_PATH,
      path,
      value
    };
  }),

//increment :: IncrementObj
  increment = R.curry (function () {
    return { type: types.BLANK_INCREMENT };
  }),


  nil = null;
