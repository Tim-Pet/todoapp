import { Component } from "react"
import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'task1'},
            {id: 2, content: 'task2'},

        ]
    }
deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id
    });
    this.setState({ 
        todos
    })
}

addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
        todos
    }
    )
}
    render (){
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Our To Do list</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App
