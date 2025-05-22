import { useState } from "react";
import TaskHeader from "./task-header";
import SearchInput from "./search";
import TaskTable from "./task-table";

import TaskModal from "./task-modal";
import type { TaskData } from "./task-modal/task-form";

const TaskBoard: React.FC = () => {
  const [isContain, setIsContain] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  return (
    <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="flex justify-end">
        <SearchInput onSearch={(e) => setIsContain(e.target.value)} />
      </div>

      <TaskHeader
        setModalOpen={setModalOpen}
      />

      <div className="mt-4 text-gray-500">
        <TaskTable
          setSelectedTask={setSelectedTask}
          setModalOpen={setModalOpen}
          isContain={isContain}
        />
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedTask(null);
        }}
        initialData={selectedTask}
      />
    </div>
  );
};

export default TaskBoard;
