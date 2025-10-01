import { Inject, Injectable } from "@nestjs/common";
import type { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import googleOauthConfig from "../config/google-oauth.config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
	constructor(
		@Inject(googleOauthConfig.KEY) googleConfig: ConfigType<
			typeof googleOauthConfig
		>,
	) {
		if (!(googleConfig.clientID && googleConfig.clientSecret)) {
			throw new Error(
				"Configuration error: Google clientID or clientSecret is missing.",
			);
		}

		super({
			clientID: googleConfig.clientID,
			clientSecret: googleConfig.clientSecret,
			callbackURL: googleConfig.callbackURL,
			scope: ["email", "profile"],
		});
	}

	async validate(
		_accessToken: string,
		_refreshToken: string,
		profile: unknown,
		_done: VerifyCallback,
	) {
		console.log({ profile });
	}
}
