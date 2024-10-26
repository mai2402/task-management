import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from "./ui/AppLayout"
import Home from "./pages/Home"
import Tasks from './pages/Tasks';
import Kanbanboard from './pages/Kanbanboard';
import TaskForm from './components/TaskForm';
import EditTask from './components/EditTask';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
                <Routes>
                  <Route path='/login' element={<Login/>}/>
      
                    <Route path="/" element={< AppLayout />}>
                        <Route index element={< Home/>}/>
                        <Route path="/Kanbanboard" element={<Kanbanboard/>} />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route path='/tasks/new' element ={<TaskForm/>}/>
                            <Route path="tasks/edit/:id" element={<EditTask/>}/>
                  </Route>
                  
  </Routes>
  </BrowserRouter>
  )
}

export default App
