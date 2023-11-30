'use strict';
const { faker } = require('@faker-js/faker');


async function create1000users() {
  const result = [];

  for (let i = 0; i < 1000; i++) {
    // 1. create each object(user)
    // 2. push object into result array
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    
    let user = {
      name: firstName,
      email: `${firstName}.${lastName}@email.com`,
      password: "password",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    result.push(user);

  }

  return result;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersCreated = await create1000users();
    await queryInterface.bulkInsert('users', usersCreated, {});
    /**
    
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
