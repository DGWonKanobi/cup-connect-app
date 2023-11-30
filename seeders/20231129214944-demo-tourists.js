'use strict';
const { faker } = require('@faker-js/faker');

async function create1000tourists() {
  const result = [];

  for (let i = 0; i < 1000; i++) {
    // 1. create each object(tourist)
    // 2. push object into result array
    let tourist = {

      full_name: faker.person.fullName(),
      biography: faker.person.bio(),
      interests: faker.person.jobDescriptor(),
      country: faker.location.country(),
      age: Math.floor(Math.random() * 100),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    result.push(tourist);

  }

  return result;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const touristsCreated = await create1000tourists();
    await queryInterface.bulkInsert('tourists', touristsCreated, {});
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
