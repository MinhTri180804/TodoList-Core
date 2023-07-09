import { createStore } from "https://cdn.skypack.dev/redux"
import { reducer } from "./reducer";

export const store = createStore(reducer);