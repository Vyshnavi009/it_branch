const mongoose=require('mongoose')

const schema = mongoose.Schema;
const userSchema = new schema({
    Username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
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

module.exports = mongoose.model('Registeruser',userSchema)
