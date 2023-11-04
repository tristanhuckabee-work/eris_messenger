const router = require('express').Router();
const { User } = require('../../db/models');
const usersRouter = require('./users.js');
const sessionRouter = require('./session.js');
const {
  requireAuth,
  restoreUser,
  setTokenCookie
} = require('../../utils/auth.js');

router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// Add a XSRF-TOKEN cookie
router.get("/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({ 'XSRF-Token': csrfToken });
});


module.exports = router;