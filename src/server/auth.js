module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(204).redirect('/');
  }
};