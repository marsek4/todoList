import React, { useState } from 'react';

function TodoListItem({ todo, setTodos }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.name);

    const toggleCompleted = () => {
        setTodos(prev => prev.map(item => 
            item.id === todo.id ? {...item, isCompleted: !item.isCompleted} : item
        ));
    }

    const handleEdit = () => {
        if (editedText.trim()) {
            setTodos(prev => prev.map(item => 
                item.id === todo.id ? { ...item, name: editedText } : item
            ));
            setIsEditing(false);
        }
    }

    const handleDelete = () => {
        setTodos(prev => prev.filter(item => item.id !== todo.id));
    }

    return (

        <li className="flex items-center gap-2 p-3 bg-blue-200 rounded-lg shadow mb-2 hover:shadow-md transition-all">

            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={toggleCompleted}
                className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400 shrink-0"
            />

            {isEditing ? (

                <div className="flex items-center flex-1 gap-2">

                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="flex-1 px-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        autoFocus
                    />
                    <button
                        onClick={handleEdit}
                        className="w-16 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                        Save
                    </button>

                </div>

            ) : (

                <>

                    <span 
                        className={`flex-1 ${todo.isCompleted ? 'line-through text-gray-600' : 'text-gray-800'}`}
                    >
                        {todo.name}
                    </span>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="w-16 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                        Edit
                    </button>

                </>
            )}

            <button
                onClick={handleDelete}
                className="w-16 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
                Delete
            </button>
        </li>
    );
}

export default TodoListItem;