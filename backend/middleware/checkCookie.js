const checkVisit =  (req, res, next) => {
  if(req.cookies === undefined || req.cookies === null) return res.status(400).send({'error': 'please login'});
  next();
}

module.exports = checkVisit;