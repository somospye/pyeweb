import type { PreinitializedWritableAtom } from "nanostores";

// this is being tested

export interface User {
	name: string;
	isLogged: boolean;
}

export interface UserData {
	user: PreinitializedWritableAtom<User | null> & object;
}

export const UserDataEmpty: User = {
	name: "",
	isLogged: false,
};
