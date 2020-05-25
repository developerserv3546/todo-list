import React from "react";

function AddTodo(props) {

    const addTodo = () => {
        const todo = document.getElementById("add-todo-input").value;
        if (todo !== "" && todo.trim().length !== 0) {
            const id = props.todos.length === 0 ? 0 : props.todos[props.todos.length - 1].id + 1;
            const isDone = false;
            const obj = {id, todo, isDone};
            props.addTodo(obj);
        }
        document.getElementById("add-todo-input").value = "";
    }

    return (<div className={"add-todo"}>
        <input onKeyPress={(event) => {
            if (event.key === "Enter") {
                addTodo();
            }
        }} id={"add-todo-input"} type={"text"} placeholder={"Enter a new TODO..."}/>
        <button onClick={addTodo}>ADD</button>
    </div>);
}

export default AddTodo;