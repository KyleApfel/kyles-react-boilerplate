import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, IndexLink } from 'react-router';
import Paper from 'material-ui/Paper';

const style = {
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  marginTop: 10,
};

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App = props => {
  return (
    <MuiThemeProvider>
      <div>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
