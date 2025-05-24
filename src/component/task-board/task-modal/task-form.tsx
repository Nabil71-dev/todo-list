import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import Select from "../../common/Select";
import { PRIORITY_OPTIONS } from "../../../contant";
import Button from "../../common/Button";
import { useTasksDispatch } from "../../../contexts/task/hook";

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
    title: initialData?.title || "",
    description: initialData?.description || "",
    tags: (initialData?.tags || []).join(", ") || "",
    priority: initialData?.priority || "Medium",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const uuid = crypto.randomUUID();
    const taskData: TaskData = {
      ...(initialData?.id
        ? { id: initialData.id, isFavorite: initialData?.isFavorite }
        : { id: uuid, isFavorite: false }),
      title: formData.title,
      description: formData.description,
      tags: tagsArray,
      priority: formData.priority,
    };

    if (initialData) {
      dispatch({
        type: "update",
        task : taskData,
      });
    }
    else{
      dispatch({
        type: "add",
        ...taskData,
      });
    }
    onCancel();
  };

  const isEditMode = !!initialData?.id;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        {isEditMode ? "Update Task" : "Add New Task"}
      </h2>

      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        type="text"
      />

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Input
        label="Tags (comma separated)"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="e.g. urgent, frontend, bug"
        type="text"
        required
      />

      <Select
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={PRIORITY_OPTIONS}
      />

      <div className="flex justify-end gap-2 mt-6">
        <Button
          color="bg-gray-300"
          textColor="text-gray-700"
          onClick={onCancel}
          type="button"
          label="Cancel"
        />
        <Button
          color="bg-blue-600"
          type="submit"
          label={isEditMode ? "Update Task" : "Add Task"}
        />
      </div>
    </form>
  );
};

export default TaskForm;
