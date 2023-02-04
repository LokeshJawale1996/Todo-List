import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);

  console.log("hiiiiiiiiii", inputVal);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal === "") {
      return;
    }
    if (edit) {
      const newTodos = [...todos];
      newTodos[indexToEdit] = inputVal;
      setTodos(newTodos);
      setEdit(false);
    } else {
      setTodos([...todos, inputVal]);
    }
    setinputVal("");
  };
  const handleEditTodo = (index) => {
    setinputVal(todos[index]);
    setEdit(true);
    setIndexToEdit(index);
  };
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,ind) => ind !== index))
  };
  return (
    <div>
      {/* on submiiting form handleSubmit event fires */}
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
        />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex gap-x-4 justify-center">
            <p>{todo}</p>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
