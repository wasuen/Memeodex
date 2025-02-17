const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    urlMeme: {type: String, required: true},
    title: {type: String, required: true},
    description: String,
    date: String,
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hashtag: [String]
})

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
