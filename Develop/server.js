//DEPENDENCIES

const express = require('express')
const fs = require('fs')
const path = require('path')
const dbPath = path.join(__dirname + "/db/db.json");

notesArr = [];
//require index.js

const app = express()
const PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})
app.get("/api/notes", function (req, res) {
    fs.readFile(
        dbPath,
        "utf8", function (err, data) {
            if (err) throw err;
            // console.log(data)
            res.json(JSON.parse(data))
        });
});

//read and write in post function
app.post('/api/notes'), function(req,res) {
    fs.readFile(dbPath, 'utf-8', function (err, data){
        if (err) throw err;

        notesArr.push(JSON.parse(data), req.body)
        
        console.log(data)
    })

    fs.writeFile(dbPath, JSON.stringify(notesArr[i], null, 2), 'utf-8', function (err, data) {
        res.status(200).send('note saved')
    })
    
    var newNote = req.body;

    console.log(newNote)

    newNote.push(newNote)

    res.json(newNote)
}

app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT)
    
})