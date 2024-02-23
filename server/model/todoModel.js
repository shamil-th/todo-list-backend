const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean
    }

})

const TASK_LIST = new mongoose.model('tasklist', todoSchema);
module.exports = TASK_LIST