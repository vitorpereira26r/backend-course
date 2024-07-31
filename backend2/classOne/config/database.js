const { Sequelize } = require("sequelize");
require('dotenv').config();

const DBNAME = process.env.DBNAME;
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;
const DBHOST = process.env.DBHOST;
const DBDIALECT = process.env.DBDIALECT;

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host: DBHOST,
    dialect: "postgres",
});

module.exports = sequelize;