let express = require('express'); 
let app = express(); 
app.use(express.json()); 
app.use(express.static(__dirname + '/../public/build')); 

let ctrl = require('./controller'); 

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})