'use strict';

const { Channel } = require('../models');
const bcrypt = require("bcryptjs");

let options = { tableName: 'Channels' };
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
const channels = [
  {
    server_id:1,
    name: 'General'
  },
  {
    server_id:2,
    name: 'General'
  },
  {
    server_id:3,
    name: 'General'
  },
  {
    server_id:4,
    name: 'General'
  },
  {
    server_id:5,
    name: 'General'
  },
  {
    server_id:1,
    name: 'Random Stuff'
  },
  {
    server_id:5,
    name: 'METAs'
  },
  {
    server_id:2,
    name: 'New Friends'
  },
  {
    server_id:4,
    name: 'Jazzz'
  },
  {
    server_id:4,
    name: 'Hip-Hop'
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Channel.bulkCreate(channels);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {});
  }
};