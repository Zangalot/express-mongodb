import HttpException from "./HttpException";
 
class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, `Authentication token is missing.`);
  }
}
 
export default AuthenticationTokenMissingException;