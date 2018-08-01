'use strict';
module.exports = function(app) {
  var addressList = require('../controllers/snappyController');

  // todoList Routes
  app.route('/snappy')
    .get(addressList.list_all_address)
    .post(addressList.create_an_address);
};
