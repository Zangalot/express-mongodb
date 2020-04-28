import * as mongoose from 'mongoose';
import Address from './address.interface';
 
const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
});

const addressModel = mongoose.model<Address & mongoose.Document>('Address', addressSchema);

export {addressModel, addressSchema};