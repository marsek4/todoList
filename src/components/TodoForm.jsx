import React, { useState } from 'react';

function TodoForm({addTodo}) {

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue.trim()) {
            return;
        }
        addTodo(inputValue);
        setInputValue('');
    }

    return (

        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">

            <input 
                type='text' 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder='Enter task name' 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
            </input>

            <button 
                type='submit' 
                class="px-4 py-2 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Add task
            </button>

        </form>

    );
}

export default TodoForm;