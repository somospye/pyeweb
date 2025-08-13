import type { Counter } from "@/models/counter.type";

export const CounterIncrement = (counter: Counter) => {
  counter.count.set(counter.count.get() + 1);
};
