'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [{
      title: 'Episodes Pertama',
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      webtoon_id: 4,
      user_id: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
    title: 'Episodes Kedua',
    image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
    webtoon_id: 4,
    user_id: 1,
    createdAt : new Date(),
    updatedAt : new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('episodes', null, {});
  }
};
