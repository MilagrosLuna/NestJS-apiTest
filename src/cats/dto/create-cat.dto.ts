import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';
// dto = lista blanca.. 
// data q se transfiere entre el cliente y el controller)?
export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed: string;
}
