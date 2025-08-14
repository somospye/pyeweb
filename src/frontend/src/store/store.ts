import { atom } from "nanostores";
import { UserDataEmpty, type User } from "@/models";

// this is being tested

export const user = atom<User | null>({
	name: UserDataEmpty.name,
	isLogged: UserDataEmpty.isLogged,
});
