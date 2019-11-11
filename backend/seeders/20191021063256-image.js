'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('images', [{
        page: '1',
        image: 'image 1',
        webtoon_id: 4,
        episode_id: 1,
        user_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        page: '2',
        image: 'image 2',
        webtoon_id: 4,
        episode_id: 1,
        user_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      ], 
      {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
