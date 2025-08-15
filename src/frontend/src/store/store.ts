import { atom } from "nanostores";
import { type User, UserDataEmpty } from "@/models";

// this is being tested

export const user = atom<User | null>({
	name: UserDataEmpty.name,
	isLogged: UserDataEmpty.isLogged,
});
