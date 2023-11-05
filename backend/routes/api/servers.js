const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Channel, Message, Server, Server_User, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Server Routes
// GET  /servers
router.get('/', requireAuth, async (req, res, next) => {
  const user = req.user;

  const servers = await Server.findAll({
    where: {owner_id: user.id},
    include: {
      model: Server_User,
      attributes: ['user_id'],
      duplicating: false,
      required: false,
    },
    attributes: ['id', 'owner_id', 'name', 'image', 'invite_url']
  });

  return res.json(servers);
});
// // POST /servers
// router.post('/', async (req, res, next) => {

// });
// // PATCH /servers/:serverId
// router.patch('/:serverId', async (req, res, next) => {

// });
// // DELETE /servers/:serverId
// router.delete('/:serverId', async (req, res, next) => {

// });
// // Server Nested Server Routes
// // GET  /servers/:serverId/channels
// router.get('/:serverId/channels', async (req, res, next) => {

// });
// // POST /servers/:serverId/channels
// router.post('/:serverId/channels', async (req, res, next) => {

// });

module.exports = router;