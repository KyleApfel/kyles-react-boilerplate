import * as R       from 'ramda';
import { logI }     from  '../utils/common';
import { CALL_API } from 'redux-api-middleware';

//           extractResults :: String -> Object -> RawResponse -> Array
export const extractResults = (a, s, res) => res.json ().then (json =>  R.prop ('results', json));

//           extractFirstResult :: String -> Object -> RawResponse -> Object
export const extractFirstResult = (a, s, res) => res.json ().then (json =>  R.head (R.prop ('results', json)));

//           handlePayloadResults :: String -> Func -> Object
export const handlePayloadResults = function (type, callback) {
 if (callback) { callback (); }
 return ({ type, payload: extractResults });
};

//           handlePayloadResult :: String -> Func -> Object
export const handlePayloadResult = function (type, callback) {
  if (callback) { callback (); }
  return ({ type, payload: extractFirstResult });
};

//           callAPI :: String -> String -> String -> Array -> Bool -> Object
export const callAPI = R.curry ((host, path, method, types, headers = {}, body = {}) => {
  if (R.isEmpty (body) === false) {
    body = JSON.stringify (body);
  } else {
    body = undefined;
  }

  headers = R.assoc ('Content-Type', 'application/json', headers);
  
  return {
    [CALL_API]: { endpoint: host + path, method, types, headers, body }
  };
});
