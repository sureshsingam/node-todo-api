// const MongoClient = require('mongodb').MongoClient;

// Es6 functionality, object destructuring pulling properties from an object and storing them in dedicated variables
const {MongoClient, ObjectID } = require('mongodb');


// second parameter is a call back function
// call back function fires after the connection is successful or failed
//callback function has 2 inputs, err and the db object

// in mongodb, you can create a new database by simply adding the name after the port's forward slash
// the db will not be created until you add data into it.
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server')
    
    // // deleteMany (delete many documents at once)
    // db.collection('Todos').deleteMany({
    //     text:"Eat Lunch",
    //     completed:false
    // })
    // .then((result)=>{
    //     console.log(result);
    // });


    
    // deleteOne (Delete only one)
    // db.collection('Todos').deleteOne({
    //     text:"Eat Lunch",
    //     completed:false
    // }).then((result)=>
    // {
    //     console.log(result);
    // },
    // (err)=>{
    //     console.log("Error message is ", err)
    // });

    // // findOneAndDelete (find and Delete at the same time)
    //     db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //         console.log(result);
    //     },(err) =>
    //     {
    //         console.log("Error", err);
    //     });


        // Challenge assignment
        // deleteMany (delete many documents at once)
        db.collection('Users').deleteMany({
            name:"Mike"
            
        })
        .then((result)=>{
            console.log(result);
        });        

        db.collection('Users').findOneAndDelete({
            _id:new ObjectID("5987d37e5f16ab3180180444")
        }).then((result)=>
        {
            console.log(JSON.stringify(result,undefined,2));

        },
        (err)=>
        {
            console.log("err",err);
        });


    // db.close();
})