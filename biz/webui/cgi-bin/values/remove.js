var values = require('../../lib/values');

module.exports = function(req, res) {
  values.remove(req.body.name);
  res.json({ec: 0, em: 'success'});
};
