'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Shirts',[
        {
          size: 'small',
          quantity: 100,
          material: 'marino wool',
          color: 'black',
          image: '',
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('shirts', null, {});
  }
};
