import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const database = process.env.DATABASE_URL;

if (!database) throw Error("undefined env database url");

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: database,
	},
});
