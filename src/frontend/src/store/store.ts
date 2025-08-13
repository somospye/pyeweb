import { atom } from "nanostores";
import type { Counter } from "@/models/counter.type.ts";

export const counter: Counter = {
  count: atom(0),
};
