import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import Select from "../../common/Select";
import { PRIORITY_OPTIONS } from "../../../contant";
import Button from "../../common/Button";
import { useTasksDispatch } from "../../contexts/task/hook";

export interface TaskData {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  priority: string;
  isFavorite?: boolean;
}

interface TaskFormProps {
  initialData?: TaskData;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onCancel }) => {
  const dispatch = useTasksDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "Medium",
  });

  useEffect(() => {
    setFormData({
      title: initialData?.title || "",
      description: initialData?.description || "",
      tags: (initialData?.tags || []).join(", "),
      priority: initialData?.priority || "Medium",
    });
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) return;

    const task: TaskData = {
      id: initialData?.id,
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      isFavorite: initialData?.isFavorite ?? false,
    };

    if (initialData?.id) {
      dispatch({ type: "update", task });
    } else {
      dispatch({ type: "add", ...task });
    }

    onCancel();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">
        {initialData?.id ? "Update Task" : "Add New Task"}
      </h2>

      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <Input
        label="Tags (comma separated)"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="e.g. frontend, urgent"
      />

      <Select
        label="Priority"
        name="priority"
        options={PRIORITY_OPTIONS}
        value={formData.priority}
        onChange={handleChange}
      />

      <div className="flex justify-end gap-2">
        <Button
          label="Cancel"
          type="button"
          onClick={onCancel}
          color="bg-gray-400"
        />
        <Button label="Submit" type="submit" color="bg-blue-600" />
      </div>
    </form>
  );
};

export default TaskForm;
