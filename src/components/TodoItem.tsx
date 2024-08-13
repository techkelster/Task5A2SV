import React from "react";
import { Task } from "../type";

interface TodoItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onEdit,
  onToggle,
}) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.content}</span>
      <button
        onClick={() =>
          onEdit(task.id, prompt("Edit task:", task.content) || task.content)
        }
      >
        Edit
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
