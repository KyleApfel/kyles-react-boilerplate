import React, { PropTypes }        from 'react';
import { connect }                 from 'react-redux';
import { bindActionCreators as D } from 'redux';
import * as actions                from './actions';
import MuiThemeProvider            from 'material-ui/styles/MuiThemeProvider';
import Component                   from './components/Blank';

export const Container = props => {
  return (
    <Component { ...props } />
  );
};

Container.propTypes = {
  actions   : PropTypes.object.isRequired,
  blankData : PropTypes.object.isRequired,
  routing   : PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return { 
    blankData : state.blankData,
    routing   : state.routing
  };
}

function mapDispatchToProps (dispatch) {
  return { 
    actions: D (actions, dispatch)
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Container);
