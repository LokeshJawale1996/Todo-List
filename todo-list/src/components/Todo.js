import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState("");

  console.log('hiiiiiiiiii',inputVal)
  const handleSubmit = (e) => {
      e.preventDefault();
      
    //   const newTodos = [...todos,inputVal];
    //   setTodos(newTodos);
      setTodos([...todos,inputVal]);
    // if(inputVal===""){  
    //   return;
    // }
  };
  const handleEdit = (index) => {

  }
  const handleDelete = (index) => {

  }
  return (
    <div>
      {/* on submiiting form handleSubmit event fires */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={(e)=>setinputVal(e.target.value)} />
        <button type="submit">Add</button>
      </form>
        <ul>
          { todos.map((todo, index) => (
            <li key={index} className="flex gap-x-4 justify-center">
              <p>{todo}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  );
}
export default Todo;
