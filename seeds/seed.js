const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPost = require('./postData');
// const seedComment = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedPost();
  console.log('\n----- PRODUCTS SEEDED -----\n');

//   await seedComment();
//   console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();