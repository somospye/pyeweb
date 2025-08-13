import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import type { Test } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): Test {
		return this.appService.getHello();
	}
}
