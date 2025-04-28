import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const handleClick = () => {
      setTasks([...tasks, task]);
      setTask('');
  }

  return (
    <div>
      <h3>TodoList</h3>
      <input type='text' value={task} onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
