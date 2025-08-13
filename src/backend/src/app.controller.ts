import { Controller, Get } from "@nestjs/common";
import type { AppService, Test } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): Test {
		return this.appService.getHello();
	}
}
