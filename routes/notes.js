const express = require('express');
const { getNotes } = require('../db/db');

const router = express.Router();

router.get('/', (req, res) => {
    getNotes().then(notes => {
        res.json(notes);
    })
    .catch(err => {
        res.status(500).json('An error occurred while fetching the notes');
    })
});

module.exports = router;