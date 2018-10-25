const connection = require("../config/connection");

const orm = {
  selectAll: (tableInput, cb) => {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  
}

module.exports = orm;