const mongoose=require('mongoose')

const restaurantsSchema=new mongoose.Schema({
    areaName:{
        type:String
    },
    avgRating:{
        type:Number
    },
    costForTwo:{
        type:String,
    },
    cuisines:{  
        type:Array
    },
    name:{
        type:String
    }
})

const Restaurant=mongoose.model('restaurantlist',restaurantsSchema)


const userSchema=new mongoose.Schema({
    contact:{
        type:Number
    },
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{versionKey:false})

// model
const Users=mongoose.model('userdetails',userSchema)


module.exports={Restaurant,Users}