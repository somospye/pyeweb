import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NotFoundExceptionFilter } from "./not-found-exception.filter";
import "dotenv/config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
		}),
	);
	app.setGlobalPrefix("/api");
	app.useGlobalFilters(new NotFoundExceptionFilter());
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
