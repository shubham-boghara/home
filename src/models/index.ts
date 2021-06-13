import mongoose from "mongoose"
import MemberModel from "./member";
import {$db} from "../../config"
import DataModel from "./data";
import { IModels } from "types/mongooseTypes";

const {database} = $db

mongoose.connect(database,
{
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() { console.log("✅  Connected to DB"); });

const models:IModels = {
    Member:MemberModel(),
    Data:DataModel(),
    
}

export default models

