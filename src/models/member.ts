import {model, Schema, Document, Model} from "mongoose"

export interface Member extends Document {
    date:string,
    month:Number,
    username:string,
    address:string,
    phonNumber: string
}

const MemberModel = () => {
    const Member:Schema<Member> = new Schema({
        date: {
            type : Date,
            required : true,
            default: Date.now 
        },
        month:{
            type : Number,
            required : true,
        },
        username: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required : true,
            default: "xyz"
        },
        phonNumber:{
            type: String,
            required : true
        },

    })

   const MModel:Model<Member> = model<Member>("Member", Member)
   
   return MModel
    
}

export default MemberModel