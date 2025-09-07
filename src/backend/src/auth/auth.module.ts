import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import googleOauthConfig from "./config/google-oauth.config";
import { GoogleStrategy } from "./strategies/google.strategy";

@Module({
	imports: [ConfigModule.forFeature(googleOauthConfig)],
	providers: [AuthService, GoogleStrategy],
	controllers: [AuthController],
})
export class AuthModule {}
