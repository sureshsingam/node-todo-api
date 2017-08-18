var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {User} = require('./models/user');
const {ObjectID } = require('mongodb');


var app = express();

// get the json sent by the client to the server
// bodyParse takes the JSON and converts to object
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(req.body)
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);

    },(e) =>{
        res.status(400).send(e);
        
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
        console.log({todos}.todos[0])
    },(e)=>{
        res.status(400).send(e)
    })
});

// Get /todos/id
app.get('/todos/:id',(req,res)=>{
    
    var requestParams = req.params
    var id = requestParams.id
    if(!ObjectID.isValid(id)){
        console.log("Object ID is not valid")
        return res.status(404).send()

    }

    Todo.findById(id).then((todos)=>{
        if(!todos){
            console.log("Valid object ID but not records returned")
            return res.status(404).send()

        }
        res.send({todos});
    }).catch((e)=>{
        res.status(400).send(e);
        console.log(2)
    });
});



app.listen(3000,()=>{
    console.log("Started on port 3000");
})


module.exports={
    app
};



