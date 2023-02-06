import mongoose, { Schema } from "mongoose";


export interface ICustomer{
    email:string,
    password:string,
    salt: string,
    phone: string,

}
const customerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: String,

},{
    toJSON:{
        transform(doc, ret){
            delete ret.password
            delete ret.salt
        }
    },
    timestamps: true
})

export const CustomerModel = mongoose.model<ICustomer>('customer', customerSchema)