import React, {FC,memo} from "react";
import {useSelector} from "react-redux";
import TaskBoard from "./taskBoard";
import "./style.css";
import {Task} from "../../redux/tasks/taskTypes";


export const TaskBoardContainer: FC = memo(() => {
    const tasks = useSelector((state: any) => state.tasks);

    return (
        <div className="list-wrapper">
            {
                tasks.map((n: Task) => <TaskBoard key={n.id} data={n} id={n.id}/>)
            }
        </div>
    );
})

