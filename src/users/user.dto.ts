import { IsString, IsObject, IsArray } from 'class-validator';
 
class UserDto {
  @IsObject()
  public address: object;

  @IsString()
  public name: string;
 
  @IsString()
  public password: string;

  @IsString()
  public email: string;
  @IsArray()
  public posts: Array<object>;
}
 
export default UserDto;