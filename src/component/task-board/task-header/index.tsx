import React from "react";
import Button from "../../common/Button";
import { useConfirm } from "../../common/ConfirmModal";
import { useTasks, useTasksDispatch } from "../../contexts/task/hook";

interface TaskHeaderProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ setModalOpen }) => {
  const { confirm } = useConfirm();
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const openModal = () => setModalOpen(true);

  const handleDeleteAll = () => {
    confirm({
      message: "Are you sure you want to delete all tasks?",
      title: "Delete All Tasks",
      onConfirm: () => dispatch({ type: "deleteAll" }),
    });
  };

  return (
    <div className="w-full flex justify-between items-center py-4 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">
        Tasks - {tasks?.length ?? 0}
      </h2>
      <div className="flex gap-2">
        <Button label="Add Task" onClick={openModal} color="bg-blue-600" />
        <Button
          label="Delete All Tasks"
          onClick={handleDeleteAll}
          color="bg-red-600"
        />
      </div>
    </div>
  );
};

export default TaskHeader;
