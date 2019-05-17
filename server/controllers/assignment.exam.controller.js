const express = require('express');
const courseRoutes = express.Router();
let mongoose = require('../models/assignment.exam.model');
//let Assignment = require('../models/assignment.exam.model');
 var Assignment = mongoose.model('AssignmentExamSchema');



const createAssignment = function (req,res,next) {
    let assignment = new Assignment(req.body);

    assignment.save().then(assignment =>{
        res.status(200).json({
            'assignment': 'Assignment added successfully'
        })
    }).catch(err=>{
        res.status(404).send('adding failed');
    });

};

const findById = function (req,res) {

    let id = req.params.id;

    Assignment.findById(id,function (err, assignment) {
        res.json(assignment);
    });
};

const updateAssignment =  function (req,res) {
    Assignment.findById(req.params.id,function (err,assignment) {
        if(!assignment)
            res.status(404).send('data is not found');
        else {
            assignment.examId = req.body.examId;
            assignment.description = req.body.description;
            assignment.deadlineDate = req.body.deadlineDate;

            assignment.save().then(assignment =>{
                res.json('Assignment updated');
            }).catch(err =>{
                res.status(404).send('Update is not possible');
            })
        }
    })
};

const removeAssignment = function (req,res) {

    let id = req.params.id;

    Assignment.findById(id,function (err, assignment) {

        if(!assignment)
            res.status(404).send('data is not found');
        else {
            assignment.remove().then(assignment =>{
                res.json('Assignment deleted');
            }).catch(err =>{
                res.status(404).send('Deleting is not possible');
            })
        }
    });
};




module.exports = {
    createAssignment,
    findById,
    updateAssignment,
    removeAssignment
}
