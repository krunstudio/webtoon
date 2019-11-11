'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};