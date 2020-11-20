import axios from "axios";
import { Task } from "../redux/tasks/taskTypes";

const API_URL = "http://localhost:3000/List";

export const Put = (editValue: string, id: string) => {
    return axios.patch(API_URL + `/${id}`, {data: {task: `${editValue}`}}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};
export const setCheckboxFinishing = (isChecked: boolean, id: string) => {
    return axios.patch(API_URL + `/${id}`, {checked: isChecked}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};
export const Delete = (id: string) => {
    return axios.delete(API_URL + `/${id}`,).then(response => {
        return response.status
    }).catch(error => {
        console.log(error);
    });
};
export const Create = (data: Task) => {
    return axios.post(API_URL, {data}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};




