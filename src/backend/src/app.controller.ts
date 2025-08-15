import { Controller, Get } from "@nestjs/common";
import type { Test } from "./app.service";
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): Test {
		return this.appService.getHello();
	}
}
