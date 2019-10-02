const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "158.140.177.79",
  user: "master_user",
  password: "Qaz@741",
  database: "nahmdummy"
});



module.exports = connection;
