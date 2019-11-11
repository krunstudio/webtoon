'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('favorites', [{
        webtoon_id: 1,
        user_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        webtoon_id: 1,
        user_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      ], 
      {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('favorites', null, {});
  }
};
