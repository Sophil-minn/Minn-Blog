import { reactTheory } from "./initialData";

export const fetchReactData = (params: string) => new Promise(resolve => setTimeout(() => {
  resolve(reactTheory?.[params])
}, 1000))