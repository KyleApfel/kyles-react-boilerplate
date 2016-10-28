import React, { PropTypes } from 'react';
import BlankTextInput from './BlankTextInput';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const style = {
  width: '100%',
  backgroundColor: '#FF5733',
  color: 'white',
  textAlign: 'center',
  display: 'inline-block',
};

const Blank = React.createClass ({
  componentWillMount () {
    const routeUnit = this.props.routing.locationBeforeTransitions.query.unit;
  },

  blankKeypress (e) {
    let name  = e.target.name,
        value = e.target.value,
        path  = name.split ('.');
console.log("hi")

    this.props.updateKeyPath (path, value)
  },

  increment () {
    this.props.increment ()
  },

  render (props) {
    const {blank, routes} = this.props;

    return (
      <div>
        <RaisedButton 
          label={"I've been clicked " + this.props.blankData.buttonData.number + " times."}
          fullWidth={true} 
          onClick={this.increment}
        />
        <TextField
          name="textData.textField"
          hintText="Type here to kick off actions and create state!"
          floatingLabelText="Action Maker"
          fullWidth={true}
          onChange={this.blankKeypress}
        />
      </div>
    )
  }
})

Blank.propTypes = {
  updateKeyPath: PropTypes.func.isRequired,
};

export default Blank
