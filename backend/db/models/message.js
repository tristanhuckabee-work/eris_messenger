'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, {foreignKey: 'owner_id'});
      Message.belongsTo(models.Channel, {foreignKey: 'channel_id'});
    }
  }
  Message.init({
    channel_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    owner_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};