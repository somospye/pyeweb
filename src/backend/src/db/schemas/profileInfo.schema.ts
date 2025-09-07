import { integer, jsonb, pgTable } from "drizzle-orm/pg-core";
import { usersTable } from "./users.schema";

export const profileInfo = pgTable("profileInfo", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	metadata: jsonb("metada"),
	userId: integer("userId").references(() => usersTable.id),
});
