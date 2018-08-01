import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const SingleInput = (props) => (
    
    <div>
        <FormGroup>
          <Label >{props.title}</Label>
          <Input 
            name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
        </FormGroup>
  </div>

);

SingleInput.propTypes = {
	inputType: PropTypes.oneOf(['text', 'number']).isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	placeholder: PropTypes.string,
};

export default SingleInput;