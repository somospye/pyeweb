import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NotFoundExceptionFilter } from "./not-found-exception.filter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.setGlobalPrefix("/api");
	app.useGlobalFilters(new NotFoundExceptionFilter());
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
