import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  let initTasks: Array<TaskType> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: true },
  ];

  let arr = useState(initTasks);
  let tasks = arr[0];
  let setTasks = arr[1];
  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  // let tasks2: Array<TaskType> = [
  //   { id: 1, title: 'Terminator', isDone: true },
  //   { id: 2, title: 'XXX', isDone: false },
  //   { id: 3, title: 'Jentlments of fortune', isDone: true },
  // ];
  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks} removeTask={removeTask} />
      {/* <Todolist title='Movies' tasks={tasks2} /> */}
    </div>
  );
}

export default App;
