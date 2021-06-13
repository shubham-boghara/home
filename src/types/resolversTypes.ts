import { ObjectId } from 'mongoose';
export interface ICM {
    username: string,
    address: string,
    phonNumber: string
}

export interface ICD {
     memberId: ObjectId,
     total_p: number,
     design: number,
     color: string,
     return_p: number,
     price: number
}