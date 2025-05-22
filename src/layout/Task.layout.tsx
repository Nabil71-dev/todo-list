import Footer from "../component/common/Footer";
import TaskBoard from "../component/task-board";
import TaskProvider from "../contexts/task/Task.provider";

const TaskLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 flex items-center justify-center px-4">
        <TaskProvider>
          <TaskBoard />
        </TaskProvider>
      </main>

      <Footer />
    </div>
  );
};

export default TaskLayout;
