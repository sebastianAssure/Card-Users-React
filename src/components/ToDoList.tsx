import { useReducer, useState, type ChangeEvent } from "react";
import type { Action, Task } from "../interfaces/type";
import { MdDelete } from "react-icons/md";

export const ToDoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);

  const [inputTask, setInputTask] = useState("");

  const handleClick = () => {
    if (!inputTask.trim()) {
      setInputTask("");
      return;
    }
    dispatch({ type: "ADD_TASK", payload: inputTask });
    setInputTask("");
  };

  const onChangeInpuTask = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  const deleteTask = (taskId: number) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const onClickTask = (taskId: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-5">
      <h1 className="font-bold text-2xl text-white">Todo List</h1>
      <div className="flex justify-center gap-5">
        <input
          onChange={onChangeInpuTask}
          value={inputTask}
          className="border-2 border-teal-400 outline-none rounded-sm text-white p-1"
          placeholder="Add a task"
          type="text"
        />
        <button
          onClick={handleClick}
          className="border-2 border-teal-500 bg-teal-500 p-1 px-4 text-white rounded-sm cursor-pointer hover:bg-teal-600 hover:border-teal-600"
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {tasks.map((task) => (
          <li className="flex gap-5 text-white">
            <p
              onClick={() => onClickTask(task.id)}
              className={
                task.isCompleted
                  ? "line-through cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {task.name}
            </p>
            <MdDelete
              onClick={() => deleteTask(task.id)}
              className="text-2xl cursor-pointer text-white"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const reducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), name: action.payload, isCompleted: false },
      ];
    case "DELETE_TASK":
      return state.filter((task) => task.id != action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
  }
};
