import { Injectable } from "@nestjs/common";

export interface Test {
	[key: string]: string;
}

const test: Test = {
	name: "Hola",
	lastName: "Mundo",
};

@Injectable()
export class AppService {
	getHello(): Test {
		return test;
	}
}
