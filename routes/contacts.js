var express = require('express');
var router = express.Router();
var CONTACTS_COLLECTION = 'contacts';
/* GET contacts listing. */
router.get('/contacts', function(req, res, next) {
  app.get('db').collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, 'Failed to get contacts');
    } else {
      res.status(200).json(docs);
    }
  });
  res.send('respond with a resource');
});
/* POST contacts listing. */
router.post('/contacts', function(req, res, next) {
  res.send('saving a resource');
});

/* Update contact listing. */
router.put('/contacts/:id', function(req, res, next) {
  res.send('update a resource');
});
/* DELETE Contact listing. */
router.delete('/contacts/:id', function(req, res, next) {
  res.send('delete a resource');
});
/* GET contact listing. */
router.get('/contacts/:id', function(req, res, next) {
  res.send('get a resource with id');
});


module.exports = router;
