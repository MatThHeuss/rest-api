const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    task:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Task',
    }],
    createdAt:{
        type:Date,
        default:Date.now,
    },
});


const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project