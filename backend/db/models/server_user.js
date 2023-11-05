'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Server_User extends Model {
    static associate(models) {
      Server_User.belongsTo(models.User, {foreignKey: 'user_id'});
      Server_User.belongsTo(models.Server, {foreignKey: 'server_id'});
    }
  }
  Server_User.init({
    server_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Server_User',
  });
  return Server_User;
};