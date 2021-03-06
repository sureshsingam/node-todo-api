const expect = require('expect')
const request = require('supertest')
const {ObjectID} = require('mongodb')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

const todos = [{
    _id:new ObjectID(),
    text:'First Test Todo'
},{
    _id:new ObjectID(),
    text: 'Second Test Todo'
}];

var _id2 = new ObjectID();

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        Todo.insertMany(todos);
    }).then(()=>done());
});

describe('POST /todos', ()=>{
    it('should create a new todo',(done)=>{
        var text = 'Test todo text';


        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        })
    });

    it('should not create todo with invalid body data',(done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        });
    })
});

describe('GET /todos',()=>{
        it("should all get todos", (done)=>{
            request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
        });        
        
});

describe('GET /todos/:id',()=>{

    it("should return todo doc",(done)=>{
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.text).toBe(todos[0].text);
        })
        .end(done);

    });

    it("should return 404 if todo not found",(done)=>{
        request(app)
        .get(`/todos/${_id2.toHexString()}`)
        .expect(404)
        .end(done)
    })

    it("should return 404 if invalid object ID found",(done)=>{
        request(app)
        .get('/todos/123')
        .expect(404)
        .end(done)
    })

});