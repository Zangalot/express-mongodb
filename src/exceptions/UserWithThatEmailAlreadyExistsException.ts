import HttpException from "./HttpException";
 
class UserWithThatEmailAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(401, `User with email ${email} already exist`);
  }
}
 
export default UserWithThatEmailAlreadyExistsException;