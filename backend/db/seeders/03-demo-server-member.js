'use strict';

const { Server_User } = require('../models');

let options = { tableName: 'Server_Users' };
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
const server_members = [
  {
    server_id:1,
    user_id:1,
  },
  {
    server_id:1,
    user_id:2,
  },
  {
    server_id:1,
    user_id:3,
  },
  {
    server_id:2,
    user_id:4,
  },
  {
    server_id:2,
    user_id:2,
  },
  {
    server_id:2,
    user_id:1,
  },
  {
    server_id:2,
    user_id:5,
  },
  {
    server_id:3,
    user_id:2,
  },
  {
    server_id:3,
    user_id:3,
  },
  {
    server_id:4,
    user_id:3,
  },
  {
    server_id:4,
    user_id:4,
  },
  {
    server_id:4,
    user_id:1,
  },
  {
    server_id:5,
    user_id:4,
  },
  {
    server_id:5,
    user_id:1,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Server_User.bulkCreate( server_members);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {});
  }
};
