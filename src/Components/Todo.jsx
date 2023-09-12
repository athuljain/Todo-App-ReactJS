import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    if (inputText.trim() !== "") {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText("");
    }
  }

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoContainer">
      <h1 className="TodoH1">Todo List</h1>
      <input
        type="text"
        placeholder="Add Something.."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
           
            < TodoItem
              text={todo.text}
              completed={todo.completed}
              onClick={() => toggleTodo(index)}
              onDelete={() => deleteTodo(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}