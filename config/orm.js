// ok, what kinds of things am I going to be doing with mySQL
//I am going to be creating new items in and updating the database
// what does an orm file do?
// apparently it converts data between different types

var connection = require("../config/connection.js");

function objToSql(ob) { //converts objects into SQL readable strings
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
     
      if (Object.hasOwnProperty.call(ob, key)) {
       
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
  }
let orm = {
    all: function(table, cb) {
      let query = `SELECT * FROM ${table};`;
      connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
        let query = `INSERT INTO ${table} (${cols.toString()}) VALUES (?, ?) ;`;
        console.log(queryString);
        connection.query(query, function(err, result) {
            if (err) {throw (err)} else {
                cb(result);
            }
        })


    },
    update: function(table, objColVals, condition, cb) {
        var query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
   
        console.log(queryString);
        connection.query(query, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
}

module.exports = orm;