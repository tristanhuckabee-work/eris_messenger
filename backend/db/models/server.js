'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    static associate(models) {
      Server.belongsTo(models.User, {foreignKey: 'owner_id'});
      Server.hasMany(models.Channel, {foreignKey: 'server_id'});
      Server.hasMany(models.Server_User, {foreignKey: 'server_id'});
    }
  }
  Server.init({
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30]
      }
    },
    image: {
      type: DataTypes.STRING
    },
    invite_url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Server',
  });
  return Server;
};