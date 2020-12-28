const express = require('express');
// const http = require('http');
const db = require('./config/mongoose');
const port  =   8000; 
const cors = require('cors');
const passportJWT = require('./config/passport-jwt-strategy');
const bodyParser = require('body-parser')

// const server = http.createServer(app);
const app = express();

app.use(bodyParser.json())
app.use('/',require('./routes'));  


app.listen(port, () => {
    console.log(`server has started on port ${port}`);
} )