'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = { tableName: 'Users' };
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

const defaultPic = 'https://res.cloudinary.com/dzsgront4/image/upload/v1699147427/eris-logo_lnhxcr.png';
const users = [
  {
    email: 'demo@user.io',
    username: 'yung-demo',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user1@user.io',
    username: 'fake-user-1',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user2@user.io',
    username: 'fake-user-2',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user3@user.io',
    username: 'fake-user-3',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user4@user.io',
    username: 'fake-user-4',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user5@user.io',
    username: 'fake-user-5',
    profilePic: defaultPic,
    hashedPassword: bcrypt.hashSync('password')
  }
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate( users, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {});
  }
};
