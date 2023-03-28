import mongoose, { Types } from "mongoose";

const serviceSchema = mongoose.Schema({
    jobDescription:{type:String,min:2, max:40, required:true},
    plannedTime:{type:mongoose.Types.Decimal128},
    partsCost:{type:Number}
})

const Service = mongoose.model('services',serviceSchema)

export default Service
