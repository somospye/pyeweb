import {
	index,
	integer,
	pgTable,
	primaryKey,
	varchar,
} from "drizzle-orm/pg-core";
import { usersTable } from "./users.schema";

export const groups = pgTable("groups", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
});

// Join table
export const userToGroups = pgTable(
	"userToGroups",
	{
		userId: integer("userId").references(() => usersTable.id),
		groupId: integer("groupId").references(() => groups.id),
	},
	(table) => [
		primaryKey({ columns: [table.groupId, table.userId] }),
		index("userIdIndex").on(table.userId),
	],
);
