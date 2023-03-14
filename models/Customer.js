import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    custName:{type:String,min:2, max:40, required:true},
    custEmail:{type:String,min:2, max:40, required:true, unique:true},
    custPhone:{type:String},
    active:{type:Boolean, default:true},
})
//model has to match the collection name in the database
const Customer = mongoose.model('customers',customerSchema)

export default Customer