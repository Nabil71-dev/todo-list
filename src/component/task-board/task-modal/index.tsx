import Modal from "../../common/Modal";
import TaskForm, { type TaskData } from "./task-form";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: TaskData | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, initialData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TaskForm initialData={initialData ?? undefined} onCancel={onClose} />
    </Modal>
  );
};

export default TaskModal;
