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
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5988e244a6d8c4a966e0b610')
    // },{
    //     $set: {
    //         text:'Eat Lunch and Play',
    //         completed:true
    //     }
    // },
    // {
    //     returnOriginal: false
    // })
    // .then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log("error ",err);
    // });

    //Challenge
    db.collection('Users').findOneAndUpdate({
        _id: 7
    },{
        $set: {
            name:'Suresh',
            location:"Fredericton"
        },
        $inc : {
            age:1
        }
    },
    {
        returnOriginal: false
    })
    .then((result)=>{
        console.log(result);
    },(err)=>{
        console.log("error ",err);
    });    

    // db.close();
})