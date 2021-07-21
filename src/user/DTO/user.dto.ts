import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  profileImage: string;

  @IsString()
  bio: string;
}