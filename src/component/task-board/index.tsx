import { useState } from "react";
import TaskHeader from "./task-header";
import SearchInput from "./search";
import TaskTable from "./task-table";

import TaskModal from "./task-modal";
import type { TaskData } from "./task-modal/task-form";

const uuid = crypto.randomUUID();
const dummyTasks = [
  {
    id: uuid,
    title: "Buy Groceries",
    description: "Milk, Bread, Eggs",
    priority: "Low",
    tags: ["shopping", "home"],
    status: "created",
    isFavorite: false,
  },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState([...dummyTasks]);
  const [isContain, setIsContain] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  const handleSubmit = (task: TaskData) => {
    if (selectedTask) {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks((prev) => [...prev, task]);
    }
    setSelectedTask(null);
  };

  const onToggleFavorite = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  const onDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="flex justify-end">
        <SearchInput onSearch={(e) => setIsContain(e.target.value)} />
      </div>

      <TaskHeader
        setSelectedTask={setSelectedTask}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        tasks={tasks?.length}
        handleSubmit={handleSubmit}
        handleDeleteAllTasks={handleDeleteAll}
      />

      <div className="mt-4 text-gray-500">
        {!tasks?.length ? (
          "No tasks available..."
        ) : (
          <TaskTable
            tasks={tasks}
            setSelectedTask={setSelectedTask}
            setModalOpen={setModalOpen}
            onToggleFavorite={onToggleFavorite}
            onDeleteTask={onDeleteTask}
            isContain={isContain}
          />
        )}
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedTask(null);
        }}
        initialData={selectedTask}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default TaskBoard;
