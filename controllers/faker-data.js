// generate-fake-data.js
// ran npm install @faker-js/faker --save-dev
const faker = require('faker');
const { User, Tourist } = require('../models'); 


const generateFakeUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    
    // Generating a random email with the user's name
    const email = faker.internet.email({ firstName, lastName });

    // Generating a random password with certain options
    const password = faker.internet.password({ length: 12, memorable: true });

    users.push({
      name: `${firstName} ${lastName}`,
      email,
      password,
      // ... other user attributes ...
    });
  }
  return users;
};

// Example usage:
const fakeUsers = generateFakeUsers(10);
console.log(fakeUsers);


const generateFakeTourists = (count) => {
  const tourists = [];
  for (let i = 0; i < count; i++) {
    const fullNameOptions = {};

    // Generate a random gender for each tourist
    const gender = faker.random.arrayElement(['male', 'female']);
    if (gender === 'male') {
      fullNameOptions.sex = 'male';
    } else {
      fullNameOptions.sex = 'female';
    }

    tourists.push({
      fullName: faker.person.fullName(fullNameOptions),
      biography: faker.person.bio(),
      interests: faker.random.words(),
      country: faker.address.country(),
      age: faker.random.number({ min: 18, max: 99 }),
    });
  }
  return tourists;
};

// Example usage:
const fakeTourists = generateFakeTourists(10);
console.log(fakeTourists);


const main = async () => {
  // Adjust the count based on how many fake records you want
  const userCount = 10;
  const touristCount = 10;

  // Generate fake users and tourists
  const fakeUsers = generateFakeUsers(userCount);
  const fakeTourists = generateFakeTourists(touristCount);

  // Create records in the database
  await User.bulkCreate(fakeUsers);
  await Tourist.bulkCreate(fakeTourists);

  console.log('Fake data generated and inserted into the database.');
};

// Run the script
main();
