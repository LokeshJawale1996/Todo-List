import React, { useState, useEffect } from "react";
import Edit from "./images/1.jpg";
import Delete from "./images/delete.jpg";
import Logo from "./images/logo2.jpg";
import Success from "./images/Success.jpg";
import Save from "./images/save.jpg";
import Reset from "./images/reset.jpg";

import "./todo.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);
  const [showCartMsg, setshowCartMsg] = useState(false);
  const [showSaveMsg, setShowSaveMsg] = useState(false);
  const [showClearMsg, setShowClearMsg] = useState(false);
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal === "") {
      //this statment not allows empty todo
      setshowCartMsg(false);
      setShowSaveMsg(false);
      return;
    }

    //if edit is true then this statment works
    if (edit) {
      const newTodos = [...todos];
      newTodos[indexToEdit] = inputVal;
      setTodos(newTodos);
      setEdit(false);
    } else {
      //if edit is false then this works
      setTodos([...todos, inputVal]);
    }
    setinputVal("");

    setshowCartMsg(true);
    const timer1 = setTimeout(() => {
      setshowCartMsg(false);
    }, 500);
    return () => clearTimeout(timer1);
  };

  //this function set the input value in state.
  const handleInput = (e) => {
    setinputVal(e.target.value);
  };

  //this function receives index of current todo and edit the todo
  const handleEditTodo = (index) => {
    setinputVal(todos[index]);
    setEdit(true);
    setIndexToEdit(index);
  };

  //this function delete todo from todos array
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, ind) => ind !== index));

    setShowDeleteMsg(true);
    const timer4 = setTimeout(() => {
      setShowDeleteMsg(false);
    }, 500);
    return () => clearTimeout(timer4);
  };
  //On clicking Save Button
  const handleSaveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));

    setShowSaveMsg(true);

    const timer2 = setTimeout(() => {
      setShowSaveMsg(false);
    }, 500);
    return () => clearTimeout(timer2);
  };

  //On Clicking Clear Button
  const handleClearAllTodo = () => {
    setShowClearMsg(true);
    const timer3 = setTimeout(() => {
      setTodos([]);
      localStorage.removeItem("todos");

      setShowClearMsg(false);
    }, 500);
    return () => clearTimeout(timer3);
  };

  //On clicking we are loading saved todo-list
  const handleRefreshAllTodo = () => {
    window.location.reload();
  };
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // showing success message while todo added
  const ShowTodoAddedMsg = () => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-1 shadow-md sticky w-1/3"
        role="alert"
      >
        <div class="flex items-center gap-x-8">
          <div class="py-1">
            <img className="w-8 h-8" src={Success} />
          </div>
          <div>
            <p className="font-extrabold">Todo is Added Successfully!!</p>
          </div>
        </div>
      </div>
    );
  };

  // showing success message while todo saved
  const ShowTodoSavedMsg = () => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-1 shadow-md sticky w-1/3 right-0"
        role="alert"
      >
        <div class="flex items-center gap-x-8">
          <div class="py-1">
            <img className="w-8 h-8" src={Save} />
          </div>
          <div>
            <p className="font-extrabold">Todo is Saved Successfully!!</p>
          </div>
        </div>
      </div>
    );
  };

  // showing message while todo cleared
  const ShowTodoClearMsg = () => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-blue-400 rounded-b text-teal-900 px-2 py-1 shadow-md sticky w-1/3 right-0"
        role="alert"
      >
        <div class="flex items-center gap-x-8">
          <div class="py-1">
            <img className="w-8 h-8" src={Reset} />
          </div>
          <div>
            <p className="font-extrabold">Todo's is Cleard Successfully!!</p>
          </div>
        </div>
      </div>
    );
  };

  // showing message while todo deleted
  const ShowTodoDeleteMsg = () => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-blue-400 rounded-b text-teal-900 px-2 py-1 shadow-md sticky w-1/3 right-0"
        role="alert"
      >
        <div class="flex items-center gap-x-8">
          <div class="py-1">
            <img className="w-8 h-8" src={Success} />
          </div>
          <div>
            <p className="font-extrabold">Todo is Deleted Successfully!!</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="container mx-auto" id="todo">
      <nav className="bg-blue-100 border-red-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 text-center flex">
        <div className="mx-auto flex w-4/5">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">
              Todo List
            </span>
          </a>
        </div>
        <div className="flex">
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleSaveTodos}
          >
            Save
          </button>
          <button
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleRefreshAllTodo}
          >
            Load
          </button>
          <button
            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            onClick={handleClearAllTodo}
          >
            Clear
          </button>
        </div>
      </nav>
      {showCartMsg && <ShowTodoAddedMsg />}
      {showSaveMsg && todos.length > 0 && <ShowTodoSavedMsg />}
      {showClearMsg && todos.length > 0 && <ShowTodoClearMsg />}
      {showDeleteMsg && <ShowTodoDeleteMsg />}

      {/* on submiiting form handleSubmit event fires */}
      <form
        onSubmit={handleSubmit}
        className="py-4 px-4 w-5/12 mx-auto flex gap-x-8"
      >
        <input
          className="bg-green-50 border font-semi-bold  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500  placeholder:text-xl  placeholder:font-medium value:text-xl"
          placeholder="Write..."
          autoFocus
          type="text"
          value={inputVal}
          onChange={handleInput}
        />

        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </form>
      <div className="">
        <ul className="w-5/12 mx-auto">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex gap-x-4  bg-red-300 mx-auto py-3 justify-center mb-3 rounded-lg text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium text-sm px-5 text-center mr-2"
            >
              <p className="w-3/4 flex flex-wrap px-4 text-xl font-semibold">
                <span>
                  {todo}
                  {/* <br/>{timeVal} */}
                </span>
              </p>

              {/* onClicking Edit and Delete we are executing handleEditTodo & handleDeleteTodo  */}
              <div className="w-1/4 px-2 flex items-center gap-x-4">
                <button className="" onClick={() => handleEditTodo(index)}>
                  <img className="h-4 mr-3 sm:h-6" src={Edit} />
                </button>
                <button className="" onClick={() => handleDeleteTodo(index)}>
                  <img className="h-3 mr-3 sm:h-6" src={Delete} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Todo;
