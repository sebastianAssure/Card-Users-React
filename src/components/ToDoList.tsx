import { useState, type ChangeEvent } from "react";

interface Task {
    id: number;
    name: string;
    isCompleted: boolean;
}

export const ToDoList = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const [inputTask, setInputTask] = useState("");

  const handleClick = () => {
    const newTask: Task = {id: Date.now(), name: inputTask, isCompleted: false};

    setTasks([...tasks, newTask]);
    setInputTask("");
  };

  const onChangeInpuTask = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  const deleteTask = (taskId: number) => {
    const updatedTaskList = tasks.filter((task) => task.id != taskId);
    setTasks(updatedTaskList);
  }

  const onClickTask = () => {

  }

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input onChange={onChangeInpuTask} value={inputTask} type="text" />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <div onClick={onClickTask}>{task.name}</div>
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
