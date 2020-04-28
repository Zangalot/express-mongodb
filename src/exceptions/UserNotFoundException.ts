import HttpException from "./HttpException";
 
class UserNotFoundException extends HttpException {
  constructor(id) {
    super(401, `User ${id} not found.`);
  }
}
 
export default UserNotFoundException;