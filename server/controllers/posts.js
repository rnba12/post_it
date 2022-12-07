const express = require('express');
const router = express.Router();


//index
router.get('/', async (req, res) => {
    try {
        res.status(200).json({Message: 'All Posts'})
    } catch (err) {
        res.status(500).json({err});
    }
})
//show
router.get('/:id', async (req, res) => {
    try {
        res.status(200).json({Message: 'Post by id'})
    } catch (err) {
        res.status(404).json({err});
    }
})

//create
router.post('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(422).json({err})
    }
})

module.exports = router;
