import React from "react";
import trash from './images/trash.png';

function TodoList(props) {

    const onTrashClick = (id) => {
        props.removeTodo(id);
    }

    const onCheckboxChange = (isDone, el) => {
        props.updateTodo(isDone, el);
    }

    const isCrossedOut = (el) => {
        if (el.isDone) {
            return <p className={"crossed-out"}>{el.todo}</p>
        } else {
            return <p>{el.todo}</p>
        }
    }

    const isChecked = (el) => {
        return el.isDone ?
            <input onChange={(e) => onCheckboxChange(e.target.checked, el)} className={"checkbox-done"}
                   type="checkbox" defaultChecked="checked"/> :
            <input onChange={(e) => onCheckboxChange(e.target.checked, el)} className={"checkbox-done"}
                   type="checkbox"/>;

    }

    return (<ul>
        {props.todos.map((el) => {
            return <div className={"todo-wrapper"} key={el.id}>
                {isCrossedOut(el)}
                <div className={"checkbox-wrapper"}>{isChecked(el)}</div>
                <div className={"trash-wrapper"}><img onClick={() => {
                    onTrashClick(el.id)
                }} id={el.id} src={trash} alt={"trash"}/></div>

            </div>
        })}
    </ul>);
}

export default TodoList;