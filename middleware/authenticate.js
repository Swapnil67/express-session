// Authentication middleware

function authenticate(req, res, next) {
  if(!req.session || !req.session.user) {
    const err = new Error("You shall not paas");
    err.statusCode = 401;
    next(err);
  }
  next();
}


module.exports = authenticate;