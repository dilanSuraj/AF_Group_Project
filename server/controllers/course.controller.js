const express = require('express');
const courseRoutes = express.Router();
let Course = require('../models/course.model');

const createCourse = function (req,res,next) {
    let course = new Course(req.body);

    course.save().then(course =>{
        res.status(200).json({
            'course': 'course added successfully'
        })
    }).catch(err=>{
        res.status(404).send('adding failed');
    });
};

const findById = function (req,res) {

    let id = req.params.id;

    Course.findById(id,function (err, course) {
        res.json(course);
    });
};

const update =  function (req,res) {
    Course.findById(req.params.id,function (err,course) {
        if(!course)
            res.status(404).send('data is not found');
        else {
            course.name = req.body.name;
            course.courseId = req.body.courseId;

            course.save().then(course =>{
                res.json('Course updated');
            }).catch(err =>{
                res.status(404).send('Update is not possible');
            })
        }
    })
};

const readAll = function (req,res) {

    Course.find(function (err, course) {
        if(err){
            console.log(err);
        }
        else{
            res.json(course);
        }
    });
};

const remove = function (req,res) {

    let id = req.params.id;

    Course.findById(id,function (err, course) {

        if(!course)
            res.status(404).send('data is not found');
        else {
            course.remove().then(course =>{
                res.json('Course deleted');
            }).catch(err =>{
                res.status(404).send('Deleting is not possible');
            })
        }
    });
};

module.exports = {
    readAll,
    createCourse,
    findById,
    update,
    remove
}