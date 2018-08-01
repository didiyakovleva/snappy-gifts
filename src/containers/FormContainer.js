import React, {
 Component
} from 'react';
import SingleInput from '../components/SingleInput';
import Note from '../components/Note';
import axios from 'axios';
import {
 Form,
 FormGroup,
 Alert
} from 'reactstrap';
class FormContainer extends Component {
 constructor(props) {
  super(props);
  this.state = {
   ownerName: '',
   address: '',
   zip: '',
   email: '',
   specialNotes: ''
  };
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleClearForm = this.handleClearForm.bind(this);
  this.handleFullNameChange = this.handleFullNameChange.bind(this);
  this.handleAddressChange = this.handleAddressChange.bind(this);
  this.handleZipChange = this.handleZipChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handleSpecialNotesChange = this.handleSpecialNotesChange.bind(this);
  this.validateEmail = this.validateEmail.bind(this);
 }
 validateEmail(value) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
 }
 handleFullNameChange(e) {
  this.setState({
   ownerName: e.target.value
  }, () => console.log('ownerName:', this.state.ownerName));
 }
 handleAddressChange(e) {
  this.setState({
   address: e.target.value
  }, () => console.log('address:', this.state.address));
 }
 handleZipChange(e) {
  this.setState({
   zip: e.target.value
  }, () => console.log('zip:', this.state.zip));
 }
 handleEmailChange(e) {
  let isValid = this.validateEmail(e.target.value);
  if (isValid) {
   this.setState({
    email: e.target.value
   }, () => console.log('email:', this.state.email));
  } else {
   return this.state;
  }
 }
 handleSpecialNotesChange(e) {
  this.setState({
   specialNotes: e.target.value
  }, () => console.log('specialNotes', this.state.specialNotes));
 }
 handleClearForm(e) {
  e.preventDefault();
  this.setState({
   ownerName: '',
   address: '',
   zip: '',
   email: '',
   specialNotes: ''
  }, );
 }
 handleFormSubmit(e) {
  const YADDRESS_API = 'https://www.yaddress.net/api/address?';
  e.preventDefault();
  axios.get(YADDRESS_API + 'AddressLine1=' + this.state.address + '&AddressLine2=' + this.state.zip).then((response) => {
   console.log('addres verification', response)
   if (response.data.ErrorCode !== 0) {
    alert(response.data.ErrorMessage);
   } else {
    axios.post('http://localhost:3002/snappy', this.state).then(function(response) {
      this.handleClearForm(e);
     })
     .catch(function(error) {
      console.log(error);
     })
   }
  })
 }
 render() {
  return ( <
   div >
   <
   Form className = "container mt-4"
   onSubmit = {
    this.handleFormSubmit
   } >
   <
   FormGroup >
   <
   h5 > Address Form < /h5> <
   SingleInput inputType = {
    'text'
   }
   title = {
    'Full name:'
   }
   name = {
    'name'
   }
   controlFunc = {
    this.handleFullNameChange
   }
   content = {
    this.state.ownerName
   }
   placeholder = {
    'Type first and last name here'
   }
   /> <
   SingleInput inputType = {
    'text'
   }
   title = {
    'Address:'
   }
   name = {
    'name'
   }
   controlFunc = {
    this.handleAddressChange
   }
   content = {
    this.state.address
   }
   placeholder = {
    'Type address here'
   }
   />
   <
   SingleInput inputType = {
    'text'
   }
   title = {
    'Zip:'
   }
   name = {
    'name'
   }
   controlFunc = {
    this.handleZipChange
   }
   content = {
    this.state.zip
   }
   placeholder = {
    'Type city, state, zip here'
   }
   /> <
   SingleInput inputType = {
    'text'
   }
   title = {
    'Email:'
   }
   name = {
    'name'
   }
   controlFunc = {
    this.handleEmailChange
   }
   content = {
    this.state.email
   }
   placeholder = {
    'your@here.com'
   }
   /> <
   Note rows = {
    5
   }
   resize = {
    false
   }
   content = {
    this.state.specialNotes
   }
   name = {
    'name'
   }
   controlFunc = {
    this.handleSpecialNotesChange
   }
   placeholder = {
    'Please be thorough in your descriptions'
   }
   /> <
   div >
   <
   input type = "submit"
   className = "btn btn-primary"
   value = "Submit" / >
   <
   button className = "btn btn-link"
   onClick = {
    this.handleClearForm
   } > Clear form <
   /button> <
   /div> <
   /FormGroup> <
   /Form> <
   /div>
  );
 }
}
export default FormContainer;