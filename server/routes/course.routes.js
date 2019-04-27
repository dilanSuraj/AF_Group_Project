const express = require('express');
const courseRoutes = express.Router();
const courseController = require('../controllers/course.controller');

courseRoutes.route('/')
    .get(courseController.readAll)
    .post(courseController.createCourse);

courseRoutes.route('/findCourse/:id')
    .get(courseController.findById);

courseRoutes.route('/:id')
    .get(courseController.findById)
    .put(courseController.update)
    .delete(courseController.remove);

module.exports = courseRoutes;

