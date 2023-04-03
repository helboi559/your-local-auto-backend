import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    date:{type:Date},
    jobDescription:{type:String,min:2, max:40, required:true},
    plannedTime:{type:mongoose.Types.Decimal128},
    partsCost:{type:Number},
    custName:{type:String,min:2, max:40, required:true},
    apptEmail:{type:String,min:2, max:20, required:true},
    status:{type:String, default:"pending", enum:["pending","completed"]},
})

const Appointment = mongoose.model('appointments',appointmentSchema)

export default Appointment