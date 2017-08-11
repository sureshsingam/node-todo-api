var mongoose = require('mongoose')

// Now we need to create a Mongoose Model to that data is organized and mongoose knows how to store data
// first parameter = name of the model
// second paramter = object defines the various properties of the model
// The new model that you created is a new constructor function

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true

    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt: {
        type:Number,
        default:null
    }
});



module.exports = {
    Todo
};