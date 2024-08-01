'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Genres',
      [
        { name: 'rap', createdAt: new Date(), updatedAt: new Date() },
        { name: 'pop', createdAt: new Date(), updatedAt: new Date() },
        { name: 'rock', createdAt: new Date(), updatedAt: new Date() },
      ],
      {},
    );

    await queryInterface.bulkInsert('Tracks', [
      {
        group: 'Dope D.O.D.',
        title: 'Rocket',
        genre_id: 1,
        img: 'https://www.rollingstone.it/wp-content/uploads/2015/04/1423820500-e1429291573299.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group: 'Onyx',
        title: 'slam',
        genre_id: 1,
        img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/Onyx2.jpg/274px-Onyx2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group: 'Imagine Dragons',
        title: 'Believer',
        genre_id: 3,
        img: 'https://www.billboard.com/wp-content/uploads/2022/12/imagine-dragons-Press-Photo-Credit-Eric-Ray-Davidson-2022-billboard-1548.jpg?w=1024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group: 'Madonna',
        title: 'Like A Prayer',
        genre_id: 2,
        img: 'https://i.ebayimg.com/images/g/wTAAAOSwUNNggTbT/s-l1200.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group: 'Linkin Park',
        title: 'Numb',
        genre_id: 3,
        img: 'https://cdns-images.dzcdn.net/images/cover/033a271b5ec10842c287827c39244fb5/500x500.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group: 'Queen',
        title: 'The Show Must Go On',
        genre_id: 3,
        img: 'https://i.ebayimg.com/images/g/m6sAAOSwsAliN4~i/s-l1600.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
