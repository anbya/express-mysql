const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.SEQUELIZE_HOST,
  user: process.env.SEQUELIZE_USER,
  password: process.env.SEQUELIZE_PASS,
  database: process.env.SEQUELIZE_DB
});



module.exports = connection;
