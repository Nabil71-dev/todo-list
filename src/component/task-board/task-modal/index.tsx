import Modal from "../../common/Modal";
import TaskForm, { type TaskData } from "./task-form";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: TaskData;
  onSubmit: (task: TaskData) => void;
}

const TaskModal = ({ isOpen, onClose, initialData, onSubmit }: TaskModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TaskForm
        initialData={initialData}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
};

export default TaskModal;
