const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;
const properties = require('./propertydb');
const componentRoutes = express.Router();
//Middleware by calling 'use'
app.use(cors());
app.use(bodyParser.json());

const courseRouteHandler = require('../routes/course.routes');
const moduleRouteHandler = require('../routes/studentModule.routes');


//connect to mongodb database to a default URL or for a new URL if it is not working
mongoose.connect( 'mongodb://'+properties.host+':'+properties.mongoPort+'/'+properties.database, {useNewUrlParser: true});

//Get the mongodb connection
const connection = mongoose.connection;

//execute if the mongodb connection is open
connection.once('open', function () {
    console.log('Mongo DB connection established successfully')
});

let Course = require('../models/course.model');
let studentModule = require('../models/student.module.model');

// componentRoutes.route('/').get(function (req,res) {
//        Course.find(function (err, course) {
//            if(err){
//                console.log(err);
//            }
//            else{
//                res.json(course);
//            }
//        });
// });
//
// componentRoutes.route('/:id').get(function (req,res) {
//
//     let id = req.params.id;
//
//     Course.findById(id,function (err, course) {
//         res.json(course);
//     });
// });
//
// componentRoutes.route('/add').post(function (req,res) {
//     let course = new Course(req.body);
//
//     course.save().then(course =>{
//         res.status(200).json({
//           'course': 'course added successfully'
//         })
//     }).catch(err=>{
//         res.status(404).send('adding failed');
//     });
// });
//
// componentRoutes.route('/update/:id').post(function (req,res) {
//     Course.findById(req.params.id,function (err,course) {
//         if(!course)
//             res.status(404).send('data is not found');
//         else {
//             course.name = req.body.name;
//             course.courseId = req.body.courseId;
//
//             course.save().then(course =>{
//                 res.json('Course updated');
//             }).catch(err =>{
//                 res.status(404).send('Update is not possible');
//             })
//         }
//     })
// });

//Base URL
app.use('/api/courses',courseRouteHandler);
app.use('/api/studentModules',moduleRouteHandler);


//Start the server
app.listen(PORT, function () {
    console.log('Server is listening to the port ',PORT);
});