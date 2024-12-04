import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import CreateTask from './pages/Tasks/CreateTask'
import EditTask from './pages/Tasks/EditTask'
import TaskList from './pages/Tasks/TaskList'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/create" element={<CreateTask />} />
    <Route path="/edit/:id" element={<EditTask task={{ id: 1, title: "Task 1", description: "Description", date: "2024-12-01" }} onUpdate={(updatedTask) => console.log(updatedTask)} />} />
    <Route path="/" element={<TaskList tasks={[{ id: 1, title: "Task 1", description: "Description", date: "2024-12-01" }]}  />} />

  </Routes>
)
}

export default AppRoutes
