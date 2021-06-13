import {model, Schema, Document, Model, ObjectId, Mongoose} from "mongoose"

export interface Data extends Document {
    memberId: ObjectId,
    date:string,
    month:string,
    total_p:Number,
    design:string,
    color:string,
    return_p:number,
    price:number
}

const DataModel = () => {
    const Data:Schema<Data> = new Schema({
        memberId: {
            type : Schema.Types.ObjectId,
            ref:"Member",
            required : true,
        },
        date:{
            type : Date,
            required : true,
            default: Date.now 
        },
        month: {
            type: Number,
            required: true
        },
        total_p: {
            type: Number,
            required : true,
            default: 0
        },
        design:{
            type: String,
            required : true
        },
        color:{
            type: String,
            required : true
        },
        return_p:{
            type: Number,
            required : true
        },
        price:{
            type: Number,
            required: true
        }
        

    })

   const DModel:Model<Data> = model<Data>("Data", Data)
   
   return DModel
    
}

export default DataModel