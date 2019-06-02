var orm = require("../config/orm.js");

var munch = {
  create: function(cols, vals, cb) {
    orm.create("munch", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("munch", objColVals, condition, function(res) {
      cb(res);
    });
  },
};