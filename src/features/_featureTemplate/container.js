import React, { PropTypes }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import {}                     from './actions';
import Component              from './components/component';

export const Container = props => <Component { ...props } />;

Container.propTypes = {
  // TODO Add PropTypes
};

function mapStateToProps (state) {
  return { 
    // TODO Give parts of state to component
  };
}

function mapDispatchToProps (dispatch) {
  return { 
    // TODO Import actions explicitly
    //action : bindActionCreators (action, dispatch)
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Container);
