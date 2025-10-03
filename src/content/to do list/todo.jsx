import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoList.module.css'

const Todo = () => {
const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});
  const [newTask, setNewTask] = useState([]);

    useEffect(() => {
      localStorage.setItem("tasks", tasks);
    }, [tasks]);

const handleInputChange = (id) => {
  setNewTask(event.target.value);
}
const addTask = (id) => {
  if (newTask.trim() === "") return;
    setTasks([...tasks, { id: uuidv4(), text: newTask }]);
    setNewTask("");
}
const removeTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id));
}
const upTask = (index) => {
  if(index === 0) return;
  const newTasks = [...tasks];
   [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
  setTasks(newTasks);
}
const downTask = (index) => {
  if(index === tasks.length - 1) return;
  const newTasks = [...tasks];
  [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
  setTasks(newTasks);
}
  return (
  <div>
        <h1>To do list</h1>

      <div>
        <input type="text" placeholder='Dodaj zadanie...' onChange={handleInputChange} value={newTask} /><button className='add__button' onClick={addTask}>Add task</button>
      </div>

      <ul>
        {tasks.map((task, index) =>
        <li key={task.id}>{task.text} 
        <button onClick={() => removeTask(task.id)}>Usuń</button >
        <button onClick={() => upTask(index)}>Up</button>
        <button onClick={() => downTask(index)}>Down</button></li>
        )}
      </ul>
      
  </div>
  )
}

export default Todo