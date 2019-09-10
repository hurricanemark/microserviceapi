// This is an example you can use in your node app
var request = require('request');
var options = {
  url: 'http://localhost:9876/api/masterlock/query',
  method: 'GET',
  bodyParams: {},
  auth: {
    user: 'sUfnHyPNBW0RD6KZldNOF4PxlLRPvCoe',
    password: ''
  },
  gzip: true,
  json: true
};
request(options, function (err, response, body) {
  console.log('success:', body.success, ', id:', body.id);
});
