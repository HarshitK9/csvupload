const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aragye497:aragye497@cluster1.zcg4zmp.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;