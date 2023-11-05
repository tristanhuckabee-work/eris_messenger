'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    static associate(models) {
      Channel.belongsTo(models.Server, {foreignKey: 'server_id'});
      Channel.hasMany(models.Message, {foreignKey: 'channel_id'});
    }
  }
  Channel.init({
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30]
      }
    }
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};