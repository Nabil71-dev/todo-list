import React from "react";
import Button from "../../common/Button";
import TaskModal from "../task-modal";
import { useConfirm } from "../../common/ConfirmModal";

interface TaskHeaderProps {
  isModalOpen: boolean;
  setModalOpen: Function;
  tasks: number;
  setSelectedTask: Function;
  handleSubmit: Function;
  handleDeleteAllTasks:Function;
}

const TaskHeader: React.FC<TaskHeaderProps> = (props) => {
  const {
    setSelectedTask,
    isModalOpen,
    setModalOpen,
    tasks,
    handleSubmit,
    handleDeleteAllTasks,
  } = props;
  const openModal = () => setModalOpen(true);

  const { confirm } = useConfirm();

  const handleDeleteAll = () => {
    confirm({
      message: "Are you sure you want to delete this task?",
      title: "Delete Task",
      onConfirm: () => {
        handleDeleteAllTasks()
      },
    });
  };

  return (
    <div className="w-full flex justify-between items-center py-4 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">Tasks - {tasks}</h2>
      <div className="flex gap-2">
        <Button label="Add Task" onClick={openModal} color="bg-blue-600" />
        <Button
          label="Delete All Task"
          onClick={handleDeleteAll}
          color="bg-red-600"
        />
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedTask(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default TaskHeader;
