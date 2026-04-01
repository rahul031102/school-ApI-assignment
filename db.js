// // const mysql = require("mysql2");

// // const db = mysql.createConnection({
// //   host: "mysql.railway.internal",
// //   user: "root",
// //   password: "kRSoNqGOvpGTNXpnKkeRLlhMQOLXGbNH",
// //   database: "railway",
// //   port: "3306"
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.log("DB Error:", err);
// //   } else {
// //     console.log("MySQL Connected");
// //   }
// // });

// // module.exports = db;

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: process.env.MYSQLHOST,
//   user: process.env.MYSQLUSER,
//   password: process.env.MYSQLPASSWORD,
//   database: process.env.MYSQLDATABASE,
//   port: process.env.MYSQLPORT
// });

// db.connect((err) => {
//   if (err) {
//     console.log("DB Error:", err);
//   } else {
//     console.log("MySQL Connected");
//   }
// });

// module.exports = db;

const mysql = require("mysql2");

//const db = mysql.createConnection(process.env.MYSQL_URL);

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;