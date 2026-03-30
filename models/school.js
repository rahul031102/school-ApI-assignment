const db = require("../db");

// Add school
const addSchool = (data, callback) => {
  const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(sql, [data.name, data.address, data.latitude, data.longitude], callback);
};

// Get all schools
const getSchools = (callback) => {
  db.query("SELECT * FROM schools", callback);
};

module.exports = { addSchool, getSchools };