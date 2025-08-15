import { join } from "node:path";
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "../../", "frontend/dist/"),
			serveStaticOptions: {
				fallthrough: false,
			},
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
