import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Task } from "./type";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (content: string) => {
    const newTask: Task = {
      id: Date.now(),
      content,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, content: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, content } : task))
    );
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
