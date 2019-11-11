'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
  };
  return favorite;
};
