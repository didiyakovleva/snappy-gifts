'use strict';


var mongoose = require('mongoose'),
  address = mongoose.model('UserAddresses');

exports.list_all_address = function(req, res) {
  address.find({}, function(err, listOfAddresses) {
    if (err)
      res.send(err);
    res.json(listOfAddresses);
  });
};




exports.create_an_address = function(req, res) {
  var new_user_address = new address(req.body);
  new_user_address.save(function(err, address) {
      console.log(address);
    if (err)
      res.send(err);
    res.json(address);
  });
};




