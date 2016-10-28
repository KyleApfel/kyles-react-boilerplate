import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const style = {
  height: 65,
  width: '100%',
  backgroundColor: '#CCCCE5',
  color: 'white',
  textAlign: 'center',
  display: 'inline-block',
};


const Header = (props) => {
  return (
    <div> 
      <Paper style={style} zDepth={1}>
        <h1>{props.headerText}</h1>
      </Paper>
    </div>
  );
};

export default Header;
