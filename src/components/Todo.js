import React, { useState } from "react";
import classes from './Todo.module.css'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const addTask = () => {
    if (title.trim() !== "") {
      if (editIndex !== null) {
        // If editing, update the task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { title, description };
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // If not editing, add a new task
        setTasks([...tasks, { title, description }]);
      }
      // Clear input fields
      setTitle("");
      setDescription("");
      // Hide options after adding/editing
      setShowOptions(false);
    }
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTitle(taskToEdit.title);
    setDescription(taskToEdit.description);
    setEditIndex(index);
    // Show options after clicking "Edit"
    setShowOptions(true);
    
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    // Hide options after deleting
    setShowOptions(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes['text-container']}>
       <h1 className={classes['first-title']}>GYIZER</h1> 
       <h6 className={classes['second-title']}>TodoApp</h6>
       </div>
        </div>
      <div className={classes['input-container']}>
        <div className={classes.inputs}>
        <input className={classes.input}
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className={classes.input}
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        
        <button className={classes['add-button']} onClick={addTask}>{editIndex !== null ? "UPDATE" :'➕'}</button>
      </div>
      <ul className={classes.tasks}>
        {tasks.map((task, index) => (
          <li key={index} className={classes['single-task']}>
            <div >
              <h6 className={classes['task-title']}>{task.title}</h6>
              <p className={classes['task-description']}>{task.description}</p>
            </div>
            <div>
              <button onClick={() => editTask(index)} className={classes.info}>Info</button>
              {showOptions && (
                <div>
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
