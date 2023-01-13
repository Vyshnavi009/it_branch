const mongoose=require('mongoose')

const schema = mongoose.Schema;

const attendenceSchema = new schema({
    Username:{
        type:String,
        unique:true,
        required:true
    },
    attendence:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('studentattendence',attendenceSchema)
