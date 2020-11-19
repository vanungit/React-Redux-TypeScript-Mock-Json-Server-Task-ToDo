import axios from "axios";

const API_URL = "http://localhost:3000/List";

export const Put = (editValue: any, id: any) => {
    return axios.post(API_URL + `?id=${id}`, {data: {task: `${editValue}`}}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};
export const setCheckboxFinishing = (isChecked: any, id: any) => {
    return axios.patch(API_URL + `/${id}`, {checked: isChecked}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};
export const Delete = (id: any) => {
    return axios.delete(API_URL + `/${id}`,).then(response => {
        debugger
        return response.data
    }).catch(error => {
        console.log(error);
    });
};
export const Create = (data: any) => {
    return axios.post(API_URL, {data}).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
};




