ALTER TABLE "userToGroups" ADD CONSTRAINT "userToGroups_groupId_userId_pk" PRIMARY KEY("groupId","userId");--> statement-breakpoint
CREATE INDEX "userIdIndex" ON "userToGroups" USING btree ("userId");