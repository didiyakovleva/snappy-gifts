import React, {
 Component
} from 'react';
import axios from 'axios';
import {
 ListGroup,
 ListGroupItem
} from 'reactstrap';
import Snsc from '../imgs/snappy-success.png';
class ListContainer extends Component {
 constructor(props) {
  super(props);
  this.state = {
   gistClaimers: []
  };
 }
 componentDidMount() {
  axios.get('http://localhost:3002/snappy').then((response) => {
    console.log('data from get/snappy', response.data);
    this.setState({
     gistClaimers: response.data
    });
    console.log(this.state);
   })
   .catch(function(error) {
    console.log(error);
   })
 }
 render() {
  return ( <
   div className = "container mt-4"
   className = "mt-5" >
   <
   img src = {
    Snsc
   }
   alt = "snappy success" / >
   <
   ListGroup > {
    this.state.gistClaimers.length > 0 &&
    this.state.gistClaimers.map((claimerRow, id) => {
     return (
      <
      ListGroupItem className = "justify-content-between "
      key = {
       id
      } >
      <
      span className = "pr-2  col-3" > {
       claimerRow.ownerName
      } < /span> <
      span className = "pr-2  col-3" > {
       claimerRow.address
      } < /span> <
      span className = "pr-2  col-3" > {
       claimerRow.zip
      } < /span>
      <
      span className = "pr-2  col-3" > {
       claimerRow.specialNotes
      } < /span>
      <
      /ListGroupItem>
     )
    })
   }
   <
   /ListGroup>
   <
   /div>
  );
 }
}
export default ListContainer;