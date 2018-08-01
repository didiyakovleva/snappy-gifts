
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Better Schema
//var AddressSchema = new Schema({
//  firstName: {
//    type: String,
//    required: 'Kindly enter your first name.'
//  },
//  lastName: {
//    type: String,
//    required: 'Kindly enter your last name.'
//  },
//  address: {
//      street: String,
//      city: String,
//      state: {
//          type: String,
//          uppercase: true,
//          require: false,
//          enum: STATES
//      },
//      zip: Number
//  },
//  email: String,
//  phoneNumber: Number,    
//  specialNotes: String,
//  Created_date: {
//    type: Date,
//    default: Date.now
//  },
//  status: {
//    type: [{
//      type: String,
//      enum: ['recieved', 'sended', 'pending']
//    }],
//    default: ['pending']
//  }
//});
//
//module.exports = mongoose.model('UserAddresses', AddressSchema);
//const STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


var AddressSchema = new Schema({
  ownerName: {
    type: String
  },
  address: {
    type: String
  },
  specialNotes: String,
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['recieved', 'sended', 'pending']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('UserAddresses', AddressSchema);