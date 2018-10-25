const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    })
  },

  addOne: (cols, vals, cb) => {
    orm.addOne("burgers", cols, vals, (res) => {
      cb(res);
    })
  }
}

module.exports = burger;