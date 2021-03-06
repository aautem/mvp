let bracketController = require('../brackets/bracketController.js');

module.exports = function (app, express) {

  app.get('/api/brackets/', bracketController.allBrackets);
  app.post('/api/brackets/', bracketController.saveBracket);
  app.delete('/api/brackets/:id', bracketController.deleteBracket);

};