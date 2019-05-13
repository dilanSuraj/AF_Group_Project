const express = require('express');
const studentModuleRoutes = express.Router();
const studentModuleController = require('../controllers/studentModule.controller');

studentModuleRoutes.route('/newStudentModule')
    .post(studentModuleController.createStudentModule);


studentModuleRoutes.route('/findStudentModule')
    .get(studentModuleController.readAllStudentModule);

studentModuleRoutes.route('/removeStudentModule')
    .get(studentModuleController.removeStudentModule);

studentModuleRoutes.route('/updateStudentModule')
    .get(studentModuleController.updateStudentModule);


module.exports = studentModuleRoutes;