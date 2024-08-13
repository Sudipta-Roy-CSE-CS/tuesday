// models/userModel.js
const db = require('../db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM details'; // Changed to 'info'
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (userData, callback) => {
    const query = 'INSERT INTO details (name, age) VALUES (?, ?)'; // Changed to 'info'
    db.query(query, [userData.name, userData.age], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM details WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  rename: (id, newName, callback) => {
    const query = 'UPDATE details SET name = ? WHERE id = ?';
    db.query(query, [newName, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};


module.exports = User;