const express = require('express');
const { requireAuth } = require('../../utils/auth');
// const { Channel, Direct_Message, Message, Server, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();



module.exports = router;