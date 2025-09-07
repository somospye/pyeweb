CREATE TABLE "profileInfo" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "profileInfo_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"metada" jsonb,
	"userId" integer
);
--> statement-breakpoint
ALTER TABLE "profileInfo" ADD CONSTRAINT "profileInfo_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;