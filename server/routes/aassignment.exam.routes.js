const express = require('express');
const assignmentRoutes = express.Router();
const assignmentController = require('../controllers/assignment.exam.controller');

assignmentRoutes.route('/createAssignment')
    .post(assignmentController.createAssignment);


assignmentRoutes.route('/findAssignment/:id')
    .get(assignmentController.findById);


assignmentRoutes.route('/:id')
    .get(assignmentController.findById)
    .put(assignmentController.updateAssignment)
    .delete(assignmentController.removeAssignment);


module.exports = assignmentRoutes;
