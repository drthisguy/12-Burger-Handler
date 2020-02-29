                const express =  require('express'),
                    burger = require('../models/burger'),


router = express.Router();


router.get('/', (req, res) => {
    burger.all( data => {
        const handler = {
            burgers: data
        }
        res.render('index', handler);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        (data) => {
            res.json({ id: data.insertId})
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.devoure({
        devoured: req.body.devoured  
    }, condition, (data) => {
        if(data.changedRows == 0) {

          return res.status(404).end() 
        }else {
            res.status(200).end();
        }
    });
});
module.exports = router;