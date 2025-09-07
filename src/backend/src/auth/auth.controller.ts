import { Controller, Get, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./guards/google-auth/google-auth.guard";

@Controller("auth")
export class AuthController {
	@UseGuards(GoogleAuthGuard)
	@Get("google/login")
	googleLogin() {}

	@UseGuards(GoogleAuthGuard)
	@Get("google/callback")
	googleCallback() {}
}
