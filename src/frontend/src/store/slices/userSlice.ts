import type { User, UserData } from "@/models";

// this is being tested

export const UserSet = (user: UserData, data: User) => {
	user.user.set(data);
};

export const UserGet = (user: UserData) => {
	return user.user.get();
};
