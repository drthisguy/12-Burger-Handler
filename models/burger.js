            const orm = require('../config/orm'),

//database layer
burger = {
    all: function(cb) {
        orm.selectAll('burgers', res => cb(res));
    },

    create: function(cols, vals, cb) {
        orm.instertOne('burgers', cols, vals, res => cb(res));
    },

    devoure: function(elements, condition, cb) {
        orm.updateOne('burgers', elements, condition,  res => cb(res));
    }
};
module.exports = burger;