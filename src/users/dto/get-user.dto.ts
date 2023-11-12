/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  userId: string;
}
