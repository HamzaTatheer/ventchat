const mongoose = require("mongoose");
const Joi = require("joi");

const userInLineSchema = new mongoose.Schema({
    socket_id: {
        type: String,
        required:true,
    },
    intent:{
        type : Number,
        required : true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});


function validateUserJoiningLine(user) {
    const schema = Joi.object({
        intent: Joi.number().min(0).max(1).required(),
    });
    return schema.validate(user);
}



const userInLine = mongoose.model('USER_IN_LINE', userInLineSchema,'USER_IN_LINE');
exports.userInLine = userInLine;
exports.validateUserJoiningLine = validateUserJoiningLine;