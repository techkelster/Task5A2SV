import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "../type";

interface TodoListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onDelete,
  onEdit,
  onToggle,
}) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
