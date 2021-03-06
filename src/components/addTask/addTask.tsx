import React, {FC, useState, useCallback,memo} from "react";
import {useDispatch} from "react-redux";
import {Task} from "../../redux/tasks/taskTypes";
import "./style.css";
import {addTaskDispatch} from "../../redux/tasks/taskReducer";


const TaskInput: FC = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState<Task>({id: "", task: ""});
    const [error, setError] = useState(false)

    const setInputDataCallback = useCallback((event) => {
        setInputData({
            id: (Math.random() * 100).toFixed(),
            task: event.target.value,
        });
    }, [setInputData]);
    const addTaskKayPress = (e:any) => {
        if (e.keyCode === 13) {
            InputDataSet()
        }
    }

    const InputDataSet = useCallback(() => {
        if (inputData.task.length === 0) {
            setError(true)
        } else {
            setError(false)
            dispatch(addTaskDispatch(inputData));
            setInputData({id: "", task: ""});
        }
    },[inputData,dispatch])

    return (
        <div className="input-wrapper">
            <input
                type="text"
                value={inputData.task}
                onChange={setInputDataCallback}
                onKeyDown={addTaskKayPress}
            />
            <button onClick={InputDataSet}>Создать</button>
            {error && <div className='error'>
                Поле должен быть заполнено
            </div>}
        </div>
    );
};

export default memo(TaskInput);
