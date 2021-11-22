const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /Users
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Users were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'User was created'
    });
});

router.get('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'User details',
        UserId: req.params.UserId
    });
});

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'User deleted',
        UserId: req.params.UserId
    });
});

module.exports = router;