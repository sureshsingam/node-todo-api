// const MongoClient = require('mongodb').MongoClient;

// Es6 functionality, object destructuring pulling properties from an object and storing them in dedicated variables
const {MongoClient, ObjectID } = require('mongodb');


// make new object id
// var obj = new ObjectID();
// console.log(obj)

// Es6 functionality, object destructuring pulling properties from an object and storing them in dedicated variables

// var user = {name:'suresh', age:33};
// var {name} = user;
// console.log(name);

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
    
    // Need to create Todos collection in the database TodoApp
    // Then need to add documents into it (documents = records)
    // db.collection('Todos').insertOne(
    //     {
    //         text:'Something to do',
    //         completed:false
    //     },
    //     (err, result)=>{

    //         if (err){
    //             return console.log('Unable to insert todo',err);
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     });


        //Challenge add a new record to the collection
    // db.collection('Users').insertOne(
    //     {
            
    //         name:'Maithili',
    //         age:33,
    //         location:'United States'
            
    //     },
    //     (err, result)=>{

    //         if (err){
    //             return console.log('Unable to insert New User',err);
    //         }
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    //     });
        
    


    db.close();
})