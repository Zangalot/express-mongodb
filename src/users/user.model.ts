import * as mongoose from 'mongoose';
import User from './user.interface';

import {addressSchema} from './../address/address.model';
 
const Schema = mongoose.Schema;
const userSchema = new Schema({
  address: addressSchema,
  name: String,
  email: String,
  password: String,
  posts: [{
    ref: 'Post',
    type: mongoose.Schema.Types.ObjectId
  }]
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);
 
export default userModel;