const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    name:{
        firstname:{
            type:String,
            required:true},
        lastname:{
            type:String,
            required:true}
    },
    emailid:{
        type:String,
        required:true
    },
    location:{
        name:{
        type:String,
        required:true},
        city:{
            zipcode:{
                type:Number,
                required:true},
            cityname:{
                type:String,
                required:true},
            statename:{
                type:String,
                required:true
            }
        }
    }
});

module.exports=mongoose.model('Customer',customerSchema);