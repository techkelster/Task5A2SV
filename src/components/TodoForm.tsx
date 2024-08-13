import React, { useState } from "react";

interface TodoFormProps {
  onAddTask: (content: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddTask(content.trim());
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
