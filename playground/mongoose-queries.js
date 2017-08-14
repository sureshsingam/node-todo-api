const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID } = require('mongodb');


// challenge
const {User} = require('./../server/models/user');

// var id  = '5990afb1513a3b425cc5b0af1'




// if(!ObjectID.isValid(id)){
//     return console.log("Id is not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     if(todos.length == 0){
//         return console.log("length 2")
//     }    
//     // Bring specific record from mongo db into the database
//     console.log("Bring specific record from mongo db");
//     console.log('Todos',todos);
// });


// Todo.find().then((todos)=>{
//     if(todos.length == 0){
//         return console.log("Length is 0")
//     }
//     // Bring all records
//     console.log("Bring all records");
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     if(!todo){
//         return console.log("Id not found")
//     }
//     console.log('Print a single document')
//     console.log('Todo\n',todo)
// });


// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("Id not found")
//     }
//     console.log('Todo By Id', todo);
//     // console.log(todo.__v);
//     // console.log(todo._id);
//     // console.log(todo.text);
//     // console.log(todo.completedAt);
//     // console.log(todo.completed);
// }).catch((e)=>{
//     console.log(e);
// });


// challenge
var id_user = '598c8f38b3a379277092fe52'
// if(!ObjectID.isValid(id_user)){
//     return console.log("User ID is not valid. Please check that correct user ID is supplied")
// }

// User.findOne({
//     _id: id_user
// }).then((user)=>{
//     if(!user){
//         return console.log(`user  ${id_user} not found`)
//     }
//     console.log(`user ${id_user} found`)
//     console.log('User\n', user)
// });

User.findById(id_user).then((user)=>{
   if(!user){
        return console.log(`user  ${id_user} not found`)
    }
    console.log(`user ${id_user} found`)
    console.log('User\n', user)
}).catch((e)=>{
    console.log(e);
});
