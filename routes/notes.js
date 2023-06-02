const express = require('express');
const { getNotes, insertNote, deleteNote } = require('../db/db');

const router = express.Router();

router.get('/', (req, res) => {
    getNotes().then(notes => {
        res.json(notes);
    })
    .catch(err => {
        res.status(500).json('An error occurred while fetching the notes');
    })
});

router.post('/', (req, res) => {
    if (!req.body) {
        return res.status(500).json('No note received');
    }
    insertNote(req.body).then(note => {
        res.status(201).json(note);
    })
    .catch(err => {
        res.status(500).json('An error occurred while inserting the note');
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    deleteNote(id).then(deleted => {
        res.json(deleted);
    })
    .catch(err => {
        res.status(500).json('An error occurred while deleting the note');
    })
})

module.exports = router;