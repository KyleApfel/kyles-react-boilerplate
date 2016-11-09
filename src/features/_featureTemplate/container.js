import React, { PropTypes }        from 'react';
import { connect }                 from 'react-redux';
import { bindActionCreators as D } from 'redux';
import * as actions                from './actions';
import Component                   from './components/component';

export const Container = props => {
  return (
    <Component { ...props } />
  );
};

Container.propTypes = {
  routing : PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return { 
    routing : state.routing
  };
}

function mapDispatchToProps (dispatch) {
  // Import actions explicitly
  return { 
    actions : D (actions, dispatch)
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Container);
