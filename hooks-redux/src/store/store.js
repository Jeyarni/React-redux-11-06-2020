import { createStore } from "redux";
import { rootReducer } from "../reducer/index";
const INITIAL_STATE = {};

export const store = createStore(rootReducer, INITIAL_STATE);
