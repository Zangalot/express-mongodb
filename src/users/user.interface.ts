import Address from './../address/address.interface';

interface User {
    _id: number;
    name: string;
    email: string;
    password: string;
    address: Address;
    posts: Array<object>;
  }
   
  export default User;