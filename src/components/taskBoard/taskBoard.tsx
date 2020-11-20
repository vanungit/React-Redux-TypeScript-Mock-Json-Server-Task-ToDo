import React, {FC, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import "./style.css";
import {Confirm} from 'react-st-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import { editTTask, DeleteTask, setCheckboxFinish} from '../../redux/tasks/taskReducer'


const TaskBoard: FC<any> = ({data,id}) => {
    debugger
    const dispatch = useDispatch();

    const [edit, SetEdit] = useState(false);
    const [editState, SetEditState] = useState(data.data.task);

    const removeArrayElementCallback = useCallback(
        (id: string) => {
            dispatch(DeleteTask(id));
        },
        [dispatch]
    );
    const setCheckboxValue = useCallback(
        (e, id) => {
            dispatch(setCheckboxFinish(e.target.checked, id));
        },
        [dispatch]
    );
    const onBlurInput = useCallback((id) => {
            SetEdit(false)
            if (editState.length === 0) return
            dispatch(editTTask(editState, id))
        }, [dispatch, editState]
    );
    const complicated = `fa ${data.checked ? 'complicated' : 'disabled'}`;
    return (
        <div className='list-container'>
            <ul>
                <li>
                    <div className="task">
                        {data.data.task}
                    </div>
                    {edit ? <div className="editInput">
                        <input type="text" autoFocus={true}
                               onChange={(e) => SetEditState(e.target.value)} placeholder={editState}
                               onBlur={() => onBlurInput(data.id)}/>
                    </div> : null}

                    <button className='trash' onClick={async () => {
                        const result = await Confirm('«Вы уверены»? ');
                        if (result) {
                            removeArrayElementCallback(data.id)
                        }
                    }
                    }>
                        <FontAwesomeIcon className='fa-2x trashIcon' icon={faTrash}
                                         style={{color: '#0075FF'}}/>
                    </button>
                    <button className='editButton'>
                        <FontAwesomeIcon className='fa-2x faEdit' onClick={() => SetEdit(!edit)} icon={faEdit}
                                         style={{color: '#0075FF'}}/>
                    </button>
                    <div className="checkboxField">
                        <label htmlFor="checkbox" className={complicated}>Выполнено</label>
                        <input type="checkbox" onChange={(e: any) => setCheckboxValue(e, data.id)} className='checkbox'
                               id='checkbox'/>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default TaskBoard;
