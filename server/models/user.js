var mongoose = require('mongoose')

// Create a new model
var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});


module.exports = {
    User
};