import 'jsdom-global/register';
import React                from 'react';
import ReactDOM             from 'react-dom';
import ReactTestUtils       from 'react-addons-test-utils';
import { shallow, mount
       , render }           from 'enzyme';
import chai, { expect }     from 'chai';
import sinon                from 'sinon';
import sinonChai            from 'sinon-chai';
import * as R               from 'ramda';
import { logI, logS }       from '../../utils/common';

import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import Component            from './components/component.js';

chai.use(sinonChai);

const
  mountWithContext = (node) => mount (node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  }),
  shallowWithContext = (node) => shallow (node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  });

const
  props = { };

describe ('Container', () => {
  describe ('<Component />', () => {
    it ('should render', () => {
      const wrapper = mountWithContext ( <Component { ...props } /> );
    });
  });
});
