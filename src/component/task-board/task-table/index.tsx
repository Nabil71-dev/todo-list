import React from "react";
import StarIcon from "../../../icons/Star.icon";
import Button from "../../common/Button";
import { useConfirm } from "../../common/ConfirmModal";
import { getRandomTagColor } from "../../../utils/random.color";
import { useTasks, useTasksDispatch } from "../../../contexts/task/hook";
// Suggested change from getRandomTagColor to deterministic

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  tags: string[];
  isFavorite: boolean;
}

interface TaskTableProps {
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContain: string;
}

const TaskTable: React.FC<TaskTableProps> = ({
  setSelectedTask,
  setModalOpen,
  isContain,
}) => {
  const { confirm } = useConfirm();
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const handleDelete = (id: string) => {
    confirm({
      message: "Are you sure you want to delete this task?",
      title: "Delete Task",
      onConfirm: () => {
        dispatch({ type: "delete", id });
      },
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(isContain.toLowerCase())
  );

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p>No tasks available...</p>
      ) : (
        <div className="overflow-y-auto max-h-[70vh] overflow-x-auto text-center">
          <table className="w-full rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-center p-2">Task</th>
                <th className="text-center p-2">Description</th>
                <th className="text-center p-2">Priority</th>
                <th className="text-center p-2">Tags</th>
                <th className="text-center p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className="transition-all">
                  <td className="p-2">{task.title}</td>
                  <td className="p-2">{task.description}</td>
                  <td className="p-2">{task.priority}</td>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {task?.tags?.map((tag: string, index: number) => {
                        const { bgColor, textColor } = getRandomTagColor();
                        return (
                          <span
                            key={tag + index}
                            className="px-2 py-0.5 text-sm rounded-full font-medium"
                            style={{
                              backgroundColor: bgColor,
                              color: textColor,
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-2 flex justify-center items-center gap-3">
                    <StarIcon
                      filled={task.isFavorite}
                      onClick={() =>
                        dispatch({ type: "makeFavourite", id: task.id })
                      }
                    />
                    <Button
                      label="Edit"
                      color="bg-blue-500"
                      onClick={() => {
                        console.log(task)
                        setSelectedTask(task);
                        setModalOpen(true);
                      }}
                      type="button"
                    />
                    <Button
                      label="Delete"
                      color="bg-red-500"
                      onClick={() => handleDelete(task.id)}
                      type="button"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TaskTable;
