require('dotenv').config();
let express = require('express'); 
const massive = require('massive'); 

let app = express(); 
app.use(express.json()); 
app.use(express.static(__dirname + '/../public/build')); 

let ctrl = require('./controller'); 
const { SERVER_PORT, CONNECTION_STRING } = process.env; 


app.get('/api/inventory', ctrl.getInventory); 

app.post('/api/product', ctrl.create); 

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db); 

    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`)
    })
})
.catch(err => console.log(err)); 

