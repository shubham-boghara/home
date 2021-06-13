import { Data } from '../models/data';
import { Member } from '../models/member';
import { Model } from 'mongoose';

export interface IModels  {
   Member : Model<Member>
   Data : Model<Data>
   
}