var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/AdminAuth', function (req, res, next) {
    const key = req.body;
    if (key && key.Key === 'cheng') {
        res.json({
            token: 'qweqweqwe',
            message: 'success',
            code: 200
        })
    } else {
        res.send('Id can not found')
        res.json({
            message: 'faild',
            code: 500,
        })
    }
})

module.exports = router;
