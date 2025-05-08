import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), name: text, isCompleted: false }]);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-blue-100 py-8 px-4">

      <div className="w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Manage your TodoList
        </h1>

        <div className="max-h-[60vh] overflow-y-auto mb-4 border-b border-gray-200">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
        
        <TodoForm addTodo={addTodo} />

      </div>

    </div>
  );
}

export default App;