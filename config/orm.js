        const connection = require('./connection');

function getQuestionMarks(arr) {

  return arr.map(x => '?').reduce((acc, cur) => acc += cur, '');

 }

const orm = {
    selectAll: function(table, cb) {
            connection.query(`SELECT * FROM ${table};`, (err, res) => {
                    if (err) throw err;

                    cb(res);
            });
    },
    
    insterOne: function(table, cols, vals, cb) {
            let queryString = `INSERT INTO ${table} (${cols.toString()}) 
                VALUES (${getQuestionMarks(vals)}) `
            
             console.log(queryString);

             connection.query(querySting, vals, (err, res) => {
                     if (err) throw err;

                     cb(res);
             });
    }
}
module.exports = orm;