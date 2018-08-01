import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const Note = (props) => (
	<div >
    <FormGroup className="notes-container">
		<Label>A place for yours special notes...</Label>
		<textarea className="p-3"
			rows={props.rows}
			name={props.name}	
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
    </FormGroup>
	</div>
);

Note.propTypes = {
    rows:PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	resize: PropTypes.bool,
	placeholder: PropTypes.string,
	controlFunc: PropTypes.func.isRequired
};

export default Note;