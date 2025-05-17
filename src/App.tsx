import { ConfirmProvider } from "./component/common/ConfirmModal"
import TaskLayout from "./layout/Task.layout"

const App=()=> {
  return (
    <ConfirmProvider>
      <TaskLayout />
    </ConfirmProvider>
  )
}

export default App
