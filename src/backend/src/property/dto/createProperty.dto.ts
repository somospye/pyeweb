import { IsInt, IsString } from "class-validator";

export class CreatePropertyDto {
	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsInt()
	area: number;
}
