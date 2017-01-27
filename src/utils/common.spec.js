import * as common      from './common';
import chai, { expect } from 'chai';
import sinon            from 'sinon';
import sinonChai        from 'sinon-chai';
import * as R           from 'ramda';
import * as T           from 'data.task';

chai.use (sinonChai);

beforeEach (function () {
  sinon.stub (console, 'log');
  sinon.stub (console, 'error');
});

afterEach (function () {
  console.log.restore ();
  console.error.restore ();
});

describe ('utils/common.js', () => {

  describe ('logI', () => {
    it ('should log and return what it is given', () => {
      var given = 'a';
      expect (common.logI (given)).eq (given);
      expect (console.log.calledWith (given)).to.be.true;
    });
  });

  describe ('logE', () => {
    it ('should log and return what it is given', () => {
      var given = 'a';
      expect (common.logE (given)).eq (given);
      expect (console.error.calledWith (given)).to.be.true;
    });
  });

  describe ('logS', () => {
    it ('should log and return what it is given', () => {
      var given  = { json: "json" };
      var givenS = R.toString (given);
      expect (common.logS (given)).eq (given);
      expect (console.log.calledWith (givenS)).to.be.true;
    });
  });

  describe ('id', () => {
    it ('should log and return what it is given', () => {
      var given  = { json: "json" };
      expect (common.id (given)).eq (given);
    });
  });

  describe ('konst', () => {
    it ('should return only the first parameter', () => {
      var givenA  = 'A';
      var givenB  = 'B';
      expect (common.konst (givenA, givenB)).eq (givenA);
    });
  });
});
