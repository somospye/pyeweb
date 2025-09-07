import { IsInt, IsPositive } from "class-validator";

export class idParamDto {
	@IsInt()
	@IsPositive()
	id: number;
}
