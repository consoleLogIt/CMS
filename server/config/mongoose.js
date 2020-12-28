const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Portal');

const db = mongoose.connection;

db.once('open',function(){
    console.log('connected to db');
})


module.exports = db;