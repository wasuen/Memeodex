const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/memeodex';

mongoose.connect(connectionString, {
    useNewUrlParser: true, useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${connectionString}`)
});

mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected from ${connectionString}`)
});

mongoose.connection.on('error', (err) => {
    console.log(`mongoose error: ${err}`)
});
