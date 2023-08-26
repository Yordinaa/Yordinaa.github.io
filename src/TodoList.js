import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    const editedContent = todos[index].text;
    setEditedTodo(editedContent);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (editedTodo.trim() !== "") {
      const newTodos = [...todos];
      newTodos[editIndex].text = editedTodo.trim();
      setTodos(newTodos);
      setEditedTodo("");
      setEditIndex(-1);
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>To-do list</h1>
        <input
          style={{ width: "100%" }}
          className="form"
          type="text"
          placeholder="What is the task for today?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="button-add" onClick={handleAddTodo}>
          Add Task
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleToggleTodo(index)}
                />
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedTodo}
                      onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <button className="sv-btn" onClick={handleSaveEdit}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        marginRight: "10px",
                        textDecoration: todo.checked ? "line-through" : "none",
                        fontFamily: "sans-serif",
                        color: "black",
                      }}
                    >
                      {todo.text}
                    </span>
                    <button
                      className="edit-button"
                      onClick={() => handleEditTodo(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteTodo(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
