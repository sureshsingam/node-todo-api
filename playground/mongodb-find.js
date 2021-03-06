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
    
    // Reading data from mongodb
    // specifically reading data from "Todos" collection
    // var mongoCursor =  db.collection('Todos').find({
    //     _id:new ObjectID("5987d22ba8b0e62aecd1c8fa")
    // });

    // // To array returns a promise
    // var arrayOfDocuments = mongoCursor.toArray();

    // // since array of Documents its a promise, success and error handling can be handled
    // arrayOfDocuments.then((docs)=>{
    //     console.log('Able to retrieve records');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos',err);
    // });


    var mongoCursor =  db.collection('Todos').find({text:"Walk the Dog"});

    var count = mongoCursor.count().then((count)=>{
        console.log(`Total count ${count} of users with same name`);
    },(err)=>
    {
        console.log("Unable to fetch count of users")
    });

    // To array returns a promise
    // Get the object id from a field
    // Then using the object id, get some other fireld
    mongoCursor.toArray().then((docs)=>{
        
        var obj_id = docs[0]._id;
        var obj_id_str = obj_id.toString();
        var obj_id_hx = obj_id.valueOf();

        var mongoCursor2 =  db.collection('Todos').find({ _id: obj_id});
        mongoCursor2.toArray().then((docs2)=>{
            console.log("Cursor 2", docs2[0].text, "completed status ",docs2[0].completed);
        },(err2)=>{
            console.log(err2)
        });




    }, (err)=>{
        console.log('Unable to fetch Users',err);
    });

    // console.log("Id is " ,obj_id);
    // console.log(typeof obj_id)
    // console.log("Id in String is " ,obj_id_str);
    // console.log("Id in hex is " ,obj_id_hx);
    // console.log(typeof obj_id_hx)

        // now use the obtained id to get other parameters
    

    // db.close();
})