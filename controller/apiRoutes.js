var connection = require('../models/noteModel')
var note = require('../models/noteModel')
const path = require('path');

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        note.selectNotes()
        .then(response => res.json(response))
    });

    app.post("/api/notes", function (req, res) {
        // read the file
        note.create(req.body.noteTitle, req.body.noteBody)
        .then(response => res.json(response))
        .catch(err =>console.log(err))
    });
    app.delete('/api/notes/:id', function (req, res){
        note.delete(req.params.id)
        .then(response => res.json(response))
        .catch(err => console.log(err))
    })
    
    
    // app.delete('/api/notes/:id', function(req, res) {
    //    fs.readFile(path.join(__dirname + "/db/db.json"), 'utf-8', function (err, dbJSON) {
    //         if (err) throw err;
    //         let key = req.params.id
    //         var data = JSON.parse(dbJSON)
    
    //         for (let i = 0; i < data.length; i++) {
    //             if (data[i].id == key) {
    //                 data.splice(i, 1);
    //                 console.log(data)
    //             }   
    //         }
    //         //Write new spliced JSON to the db.JSON file
    //         fs.writeFile(path.join(__dirname + "/db/db.json"), JSON.stringify(data, null, 2), 'utf-8', function(err){
    //             if (err) throw err 
    //             res.sendStatus(200);
    //             console.log(key)
    //         })
    //     })
    // })
}