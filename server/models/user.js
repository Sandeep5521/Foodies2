const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favourites: Array,
    tokens: Array
})

const User = mongoose.model('User', userSchema);
module.exports = User;