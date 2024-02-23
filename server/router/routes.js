const express = require('express');
const route = express.Router();
const taskController = require('../controller/taskController')

route.post('/',taskController.create);
route.get('/',taskController.find);
route.delete('/:id',taskController.remove);
route.put('/:id',taskController.update);

module.exports = route