import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos, setTodos }) {

    if (!todos.length) {
        return <p className="text-gray-500 italic">No tasks yet</p>
    }

    return(
        <ul className="space-y-2">
            {todos.map((todo) => 
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                setTodos={setTodos}
            />)}
        </ul>
    );
}

export default TodoList;
