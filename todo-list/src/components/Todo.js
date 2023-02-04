import React, { useState,useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);
  const [timeVal, setTimeVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 
        // setTimeVal(time);

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
  const handleInput = (e) => {
   setinputVal(e.target.value);
   var d = new Date();
       let s = d.getSeconds();
       let m = d.getMinutes();
       let h = d.getHours();
       setTimeVal(`${h}:${m}:${s}`)

  }
  
  const handleEditTodo = (index) => {
    setinputVal(todos[index]);
    setEdit(true);
    setIndexToEdit(index);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,ind) => ind !== index))
  };
//On clicking Save Button 
  const handleSaveTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }

//On Clicking Clear Button
const handleClearAllTodo = () => {
setTodos([]);
localStorage.removeItem("todos");
}

useEffect (() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
        setTodos(JSON.parse(savedTodos));
    }

},[]);
  return (
    <div>
      {/* on submiiting form handleSubmit event fires */}
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={inputVal}
          onChange={handleInput}
        />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
      <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex gap-x-4 justify-center">
            <p>
                <span>{todo}
                {/* <br/>{timeVal} */}
                </span>
            </p>
            
            {/* onClicking Edit and Delete we are executing handleEditTodo & handleDeleteTodo  */}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <button onClick={handleSaveTodos}>Save</button>
        <button onClick={handleClearAllTodo}>Clear</button>
      </div>
   
    </div>
  );
}
export default Todo;
