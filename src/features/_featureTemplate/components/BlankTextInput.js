import React, {PropTypes} from 'react';

const blankTextInput = (props) => {
  const handleChange = (e) => {
   props.onChange(props.name, e.target.value);
   //this.setState({value: e.target.value});
  };

  return (
    <input
      type="text"
      placeholder="Enter Unit Number Here"
      value={props.value}
      onChange={handleChange}/>
  );
};

blankTextInput.propTypes = {
 name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default blankTextInput;
