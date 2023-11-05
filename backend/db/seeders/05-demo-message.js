'use strict';

const { Message } = require('../models');
const bcrypt = require("bcryptjs");

let options = { tableName: 'Messages' };
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
const messages = [
  {
    channel_id:1,
    owner_id:1,
    content: 'Hey'
  },
  {
    channel_id:1,
    owner_id:2,
    content: 'Hey'
  },
  {
    channel_id:1,
    owner_id:1,
    content: 'Is that it?'
  },
  {
    channel_id:1,
    owner_id:2,
    content: 'No'
  },
  {
    channel_id:1,
    owner_id:1,
    content: 'Breh...'
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Message.bulkCreate( messages );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {});
  }
};
