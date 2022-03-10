const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);