import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Blank from './components/Blank';

export const BlankPage = (props) => {
  return (
    <Blank
      increment     = {props.actions.increment}
      updateKeyPath = {props.actions.updateKeyPath}
      blankData     = {props.blankData}
      routing       = {props.routing}
    />
  );
};

BlankPage.propTypes = {
  actions  : PropTypes.object.isRequired,
  blankData: PropTypes.object.isRequired,
  routing  : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { 
    blankData : state.blankData
   ,routing   : state.routing
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlankPage);
