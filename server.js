//DEPENDENCIES

const express = require('express')

//require index.js

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./controller/apiRoutes.js')(app)
app.use(express.static('public'));

require('./controller/controller.js')(app)



app.listen(PORT, function() {
    console.log('App listening on PORT:' + PORT)
})