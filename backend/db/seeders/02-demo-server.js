'use strict';

const { Server } = require('../models');

let options = {tableName: 'Servers'};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

const defaultPic = 'https://res.cloudinary.com/dzsgront4/image/upload/v1699147427/eris-logo_lnhxcr.png';
const servers = [
  {
    owner_id: 1,
    name: 'My Server',
    image: defaultPic,
    invite_url: '' 
  },
  {
    owner_id: 1,
    name: 'Demo & Friends',
    image: defaultPic,
    invite_url: ''
  },
  {
    owner_id: 2,
    name: 'All the Cats!',
    image: defaultPic,
    invite_url: ''
  },
  {
    owner_id: 3,
    name: 'Music Discussions',
    image: defaultPic,
    invite_url: ''
  },
  {
    owner_id: 4,
    name: 'Valorant Lobbies',
    image: defaultPic,
    invite_url: ''
  },
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await Server.bulkCreate(servers);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  }
};
