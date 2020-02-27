        const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
            connection.query(`SELECT * FROM ${table};`, (err, res) => {
                    if (err) throw err;

                    cb(res);
            });
    },
    
}