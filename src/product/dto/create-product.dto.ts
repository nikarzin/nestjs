import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsEmail()
  email : string;

  @IsNotEmpty()
  password: string;
}
