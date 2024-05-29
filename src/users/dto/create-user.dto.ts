import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], {
    message: 'Valid role required',
  })
  role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}
