        const connection = require('./connection');


//Helper functions could provide future scalability
function getQuestionMarks(arr) {

  return arr.map(x => '?').reduce((acc, cur) => acc += cur, '');

 }

 function sqlizor(obj) {
   const arr = [];

   Object.keys(obj).forEach( key => {
           let val = obj[key].toString();
           val = val.indexOf(' ') !== -1 ? `'${val}'` : val;
           arr.push(`${key}=${val}`)
   });
   return arr.toString();
  }

//relational maping
const orm = {
    selectAll: function(table, cb) {
            connection.query(`SELECT * FROM ${table};`, (err, res) => {
                    if (err) throw err;

                    cb(res);
        });
    },
    
    instertOne: function(table, cols, vals, cb) {
            const queryString = `INSERT INTO ${table} (${cols.toString()}) 
                VALUES (${getQuestionMarks(vals)}) `;

             connection.query(queryString, vals, (err, res) => {
                     if (err) throw err;

                     cb(res);
         });
    },

    updateOne: function(table, elements, condition, cb) {
            const queryString =  `UPDATE ${table} SET ${sqlizor(elements)} WHERE ${condition}`; 

            connection.query(queryString, (err, res) => {
                    if (err) console.log(err);

                    cb(res);
        });
    }
}
module.exports = orm;