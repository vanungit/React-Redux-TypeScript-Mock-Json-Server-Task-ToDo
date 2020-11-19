import React, {FC} from "react";
import {useSelector} from "react-redux";
import TaskBoard from "./taskBoard";
import "./style.css";
import {Task} from "../../redux/tasks/taskTypes";


export const TaskBoardContainer: FC = () => {
    const tasks = useSelector((state: any) => state.tasks);

    return (
        <div className="list-wrapper">
            {

                tasks.map((n: Task) => <TaskBoard key={n.id} data={n}/>)
            }
        </div>
    );
}

