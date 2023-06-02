const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DB_PATH = path.join(__dirname, 'db.json');

module.exports.getNotes = function() {
    return fs.readFile(DB_PATH).then(data => JSON.parse(data));
}

module.exports.insertNote = function(note) {
    return fs.readFile(DB_PATH).then(data => {
        const notes = JSON.parse(data);
        if (!note.id) {
            note.id = uuidv4();
        }
        notes.push(note);
        return fs.writeFile(DB_PATH, JSON.stringify(notes)).then(() => note);
    })
}

// deleteNote takes note id, and returns whether or not anything was deleted
module.exports.deleteNote = function(id) {
    if (!id) {
        return Promise.resolve(false);
    }
    return fs.readFile(DB_PATH).then(data => {
        const notes = JSON.parse(data);
        const index = notes.findIndex(note => note.id === id);
        if (index == -1) {
            // id was not found
            return false;
        }
        notes.splice(index, 1);
        return fs.writeFile(DB_PATH, JSON.stringify(notes)).then(() => true);
    })
}