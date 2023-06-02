const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports.getNotes = function() {
    return fs.readFile(path.join(__dirname, 'db.json')).then(data => JSON.parse(data));
}