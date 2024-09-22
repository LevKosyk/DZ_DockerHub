const { Router } = require('express');
const calculator = require('../models/calculator');
const router = Router();

router.get('/', (req, res) => {
    if (isNaN(req.query.a) || isNaN(req.query.b)) {
        return res.status(400).render('index', { result: 'Invalid input!' });
    }
    if (req.query.func == '/' || req.query.b == '0') {
        return res.status(400).render('index', { result: 'Devide by zero!' });
    }
    const calc = new calculator(req.query.a, req.query.func, req.query.b);
    const result = calc.Result();
    res.render('index', { result: result });
});

module.exports = router;
