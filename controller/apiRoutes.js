var connection = require('../models/noteModel')
var note = require('../models/noteModel')
const express = require('express'); 
let router = express.Router();

// module.exports = function (router) {
    router.get("/api/notes", function (req, res) {
        Note.selectNotes()
        .then(response => res.json(response))
    });

    router.post("/api/notes", function (req, res) {
        // read the file
        Note.create(req.body.noteTitle, req.body.noteBody)
        .then(response => res.json(response))
        .catch(err =>console.log(err))
    });
    router.delete('/api/notes/:id', function (req, res){
        note.delete(req.params.id)
        .then(response => res.json(response))
        .catch(err => console.log(err))
    })
// }
module.exports = router