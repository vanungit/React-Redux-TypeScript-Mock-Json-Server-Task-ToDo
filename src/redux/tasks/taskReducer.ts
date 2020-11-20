import {Task} from "./taskTypes";
import {InferActionsType,} from "../store";
import {Put, Create, Delete, setCheckboxFinishing} from "../../service/auth.service";

const initialState = {
    tasks: [] as Array<Task>
};

export const taskReducer = (state = initialState, action: ExtionType): TaskStatee => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            };
        case EDIT_TASK:
            const id = payload.id;
            let editValue = payload.editValue.task;
            return {
                ...state,
                tasks: state.tasks.map((n: any) => {
                    if (n['id'] === id) {
                        return {...n, ...[n.data.task = editValue]}
                    }
                    return n;
                })
            }
        case SET_CHECKBOX:
            const idChecked = payload.id;
            let value = payload.value
            return {
                ...state,
                tasks: state.tasks.map((n: any) => {
                    if (n['id'] === idChecked) {
                        return {...n, ...{checked: value}}
                    }
                    return n;
                })
            };

        case DELETE_TASK:
            if (payload) {
                const {id} = payload;
                state.tasks.splice(id, 1);
                return {
                    ...state,
                    tasks: [...state.tasks]
                };
            } else {
                const id = payload;
                state.tasks.splice(id, 1);
                return {
                    ...state, tasks: state.tasks
                };
            }

        default:
            return state;
    }
};
export const actions = {
    addTask: (newTask: Task) => ({type: ADD_TASK, payload: newTask} as const),
    deleteTask: (id: any) => ({type: DELETE_TASK, payload: id} as const),
    setEdit: (editValue: string, id: any) => ({type: EDIT_TASK, payload: {editValue, id}} as const),
    setCheckbox: (value: boolean, id: number) => ({type: SET_CHECKBOX, payload: {value, id}} as const)

}
export const addTaskDispatch = (data: any): any => {
    return async (dispatch: any) => {
        let response = await Create(data);
        debugger
        dispatch(actions.addTask(response))
    }
}
export const setCheckboxFinish = (isChecked: boolean, id: any): any => {
    return async (dispatch: any) => {
        let response = await setCheckboxFinishing(isChecked, id);
        dispatch(actions.setCheckbox(response.checked, id))
    }
}
export const editTTask = (editValue: string, id: string): any => {
    return async (dispatch: any) => {
        let response = await Put(editValue, id);
        dispatch(actions.setEdit(response.data, id))
    }
}
export const DeleteTask = (id: string): any => {
    return async (dispatch: any) => {
        let response = await Delete(id);
        dispatch(actions.deleteTask(response))
    }
}
type ExtionType = InferActionsType<typeof actions>
export type TaskStatee = typeof initialState

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const SET_CHECKBOX = "SET_CHECKBOX";
