import * as mongoose from 'mongoose';
import { IsNotEmpty} from 'class-validator';

export const AnimalSchema = new mongoose.Schema({
    
    name : {type: String, required: true},
    category : {type: String, required: true},
    age : {type: Number, required: true}
});

export interface Animal extends mongoose.Document {
    
    id : string;
    name: string;
    category : string;
    age : number;
}