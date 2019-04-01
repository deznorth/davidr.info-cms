const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

router.use(middleware.checkApiKey);

//root
router.get('/', (req,res) => {
    
});

module.exports = router;