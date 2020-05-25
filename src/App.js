import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {

    const [todos, setTodo] = useState([
        {id: 0, todo: 'Get up at 6:00am', isDone: false},
        {id: 1, todo: 'Do morning exercises', isDone: true},
        {id: 2, todo: 'Call Mom', isDone: true},
        {id: 3, todo: 'Read a book', isDone: false},
        {id: 4, todo: 'Buy tickets to LA', isDone: false},
        {id: 5, todo: 'Learn React.js', isDone: true},
        {id: 6, todo: 'Organize office', isDone: false},
    ]);

    const addTodo = (obj) => {
        const arr = todos.slice();
        arr.push(obj)
        setTodo(arr);
    }

    const updateTodo = (isDone, e) => {
        const arr = todos.slice();
        arr.forEach((el) => {
            if (el === e) {
                el.isDone = isDone;
            }
        });

        console.log(arr);
        setTodo(arr);
    }

    const removeTodo = (id) => {
        const arr = todos.slice();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                arr.splice(i, 1);
                break;
            }
        }
        setTodo(arr);
    }

    return (
        <div className="App">
            <header>
                <div className={"date-wrapper"}>25</div>
                <div className={"date-wrapper2"}><p className={"date"}>MAY</p><p className={"date"}>2020</p></div>
                <div className={"date-wrapper3"}><p className={"day"}>Monday</p></div>
            </header>
            <hr/>
            <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
            <AddTodo addTodo={addTodo} todos={todos}/>
        </div>
    );
}

export default App;
