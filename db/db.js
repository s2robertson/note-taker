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
        // console.log(note);
        // console.log(note.id)
        if (!note.id) {
            note.id = uuidv4();
        }
        notes.push(note);
        return fs.writeFile(DB_PATH, JSON.stringify(notes)).then(() => note);
    })
}