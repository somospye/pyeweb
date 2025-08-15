import { join } from "node:path";
import {
	type ArgumentsHost,
	Catch,
	type ExceptionFilter,
	NotFoundException,
} from "@nestjs/common";
import type { Response } from "express";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
	catch(_exception: NotFoundException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		response.sendFile(join(__dirname, "../../", "frontend/dist/404.html"));
	}
}
