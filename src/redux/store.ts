import { createStore, compose } from "redux";
import { taskReducer } from "./tasks/taskReducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware} from "redux";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type InferActionsType<T> = T extends {[key:string]:(...args:any[])=>infer U} ? U : never
const store = createStore(taskReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;