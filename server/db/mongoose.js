var mongoose = require('mongoose');

// Set Mongoose to use the default mongoose Promise library
mongoose.Promise = global.Promise;

// Connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.exports = {
//     mongoose:mongoose
// }

//above is same as below:
module.exports = {
    mongoose
};