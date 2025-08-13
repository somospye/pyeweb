import type { PreinitializedWritableAtom } from "nanostores";

export interface Counter {
	count: PreinitializedWritableAtom<number> & object;
}
