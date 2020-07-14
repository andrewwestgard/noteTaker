app.delete('/api/notes/:id', function (req, res) {
    fs.readFile(path.join(__dirname + "/db/db.json"), 'utf-8', function (err, dbJSON) {
        if (err) throw err;
        let key = req.params.id;
        var data = JSON.parse(dbJSON);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == key) {
                data.splice(i, 1);
                console.log(data)
            }
        }
        // Write updated dbJSON to db.json
        fs.writeFile(path.join(__dirname + "/db/db.json"), JSON.stringify(data, null, 2), "utf8", function (err) {
            if (err) throw err;
            res.sendStatus(200)
        });
    })
})