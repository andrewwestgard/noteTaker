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
app.post("/api/notes", function (req, res) {
    // read the file
    fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function (err, data) {
        if (err) throw err;
        // give unique id every object
        data = JSON.parse(data);
        if (data.length === 0) {
            req.body.id = 0;
        } else {
            req.body.id = data[data.length - 1].id + 1;
        };
        data.push(req.body);
        // write the file with new note
        fs.writeFile(path.join(__dirname + "/db/db.json"), JSON.stringify(data, null, 2), "utf8", function (err) {
            if (err) throw err;
            res.sendStatus(200)
        });
    });
});

app.delete('/api/notes/:id'), function(req, res) {
    let savedNotes = fs.readFile(path.join(__dirname + "/db/db.json"), 'utf-8', function (err) {
        if (err) throw err;
        // let deleteID = 
        for (let i = 0; i < savedNotes.length; i++) {
            if(id[i] === req.params.id) {
                
            }
            
        }
    })
    
}

app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT)
})

    // //read the already saved notes
    // fs.readFile(path.join(__dirname))

    // //write new notes to the db.JSON file
    // fs.writeFileSync(dbPath, JSON.stringify(savedNotes)); 

    // console.log('note saved to db', newNote);

    // res.JSON(newNote);
    // // fs.readFile(dbPath, 'utf-8', function (err, data){
    // //     if (err) throw err;

    // //     notesArr.push(JSON.parse(data), req.body)
        
    // //     console.log(data)
    // // })

    // fs.writeFile(dbPath, JSON.stringify(notesArr[i], null, 2), 'utf-8', function (err, data) {
    //     res.status(200).send('note saved')
    // })
    


    // fs.readFile(dbPath, 'utf-8', function(error, response) {
    //     //error function
    //     if (error) {
    //         console.log(error)
    //         return error
    //     }
    //     //Define response variables
    //     const notes = JSON.parse(response)
    //     const noteRequest = req.body;
    //     const newNote = {
    //         title: noteRequest.title,
    //         text: noteRequest.text
    //     };
    //     //push newNote object
    //     notes.push(newNote);
    //     res.JSON(newNote)
    //     fs.writeFile(dbPath, JSON.stringify(notes, null, 2), function(err){
    //         if (err) throw err;
    //     })
    // })