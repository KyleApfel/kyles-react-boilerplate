import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, IndexLink } from 'react-router';
import Header from './Header';
import Footer from './Footer';
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
        <Paper style={style} zDepth={3}>
        <Header 
          headerText = "I'm The Header.js" 
        />
        <div style={{padding: 10}}>
        {props.children}
        </div>
        <Footer 
          footerText = "I'm The Footer.js"
        />
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
