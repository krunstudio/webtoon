'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('webtoons', [{
        created_by : 1,
        title: 'True Beauty',
        genre: 'Drama',
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    {
      created_by : 1,
      title: 'Age Matters',
      genre: 'Romance',
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      created_by : 1,
      title: 'A Good Day to be a Dog',
      genre: 'Romance',
      image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ],);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('webtoons', null, {});
  }
};
