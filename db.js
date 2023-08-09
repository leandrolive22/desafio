
require('dotenv').config();
const host = String(process.env.DB_HOST);
const user = String(process.env.DB_USERNAME);
const password = String(process.env.DB_PASSWORD);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking', user, password, {dialect: 'mysql', host: host});

module.exports = sequelize;