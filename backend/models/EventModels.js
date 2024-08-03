
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    organized:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
    },
    booking:[
        {
            name:{
                type:String,
                required:true
            },
            mobile:{
                type:Number,
                required:true
            }
        }
    ]
})

const eventRepo = mongoose.model('event',schema);
module.exports = eventRepo