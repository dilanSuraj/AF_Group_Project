const express = require('express');
const courseRoutes = express.Router();
let StudentModule = require('../models/student.module.model');

const createStudentModule = function(req, res,next){
    let studentmodule = new StudentModule(req.body);

    studentmodule.save().then(studentmodule =>{
        res.status(200).json({
            'course': 'course added successfully'
        })
    }).catch(err=>{
        res.status(404).send('adding failed');
    });
};


const readAllStudentModule = function (req,res) {

    StudentModule.find(function (err, studentmodule) {
        if(err){
            console.log(err);
        }
        else{
            res.json(studentmodule);
        }
    });
};

const removeStudentModule = function (req,res) {

    let id = req.params.id;

    StudentModule.findById(id,function (err, studentmodule) {

        if(!studentmodule)
            res.status(404).send('data is not found');
        else {
            studentmodule.remove().then(studentmodule =>{
                res.json('Student Module deleted');
            }).catch(err =>{
                res.status(404).send('Deleting is not possible');
            })
        }
    });
};

const updateStudentModule =  function (req,res) {
    StudentModule.findById(req.params.id,function (err,studentmodule) {
        if(!studentmodule)
            res.status(404).send('data is not found');
        else {
            studentmodule.examId = req.body.examId;
            studentmodule.studentId = req.body.studentId;

            studentmodule.save().then(studentmodule =>{
                res.json('student module updated');
            }).catch(err =>{
                res.status(404).send('Update is not possible');
            })
        }
    })
};

module.exports = {
    readAllStudentModule,
    createStudentModule,
    removeStudentModule,
    updateStudentModule
}