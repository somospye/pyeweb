import { join } from "node:path";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import googleOauthConfig from "./auth/config/google-oauth.config";
import { DrizzleModule } from "./db/drizzle.module";
import { PropertyModule } from "./property/property.module";

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "../../", "frontend/dist/"),
			serveStaticOptions: {
				fallthrough: false,
			},
		}),
		ConfigModule.forFeature(googleOauthConfig),
		AuthModule,
		PropertyModule,
		DrizzleModule,
	],
	controllers: [AppController, AuthController],
	providers: [AppService],
})
export class AppModule {}
