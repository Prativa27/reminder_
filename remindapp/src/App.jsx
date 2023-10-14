import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SetReminder from './SetReminder'
import ModifyReminder from './pages/ModifyReminder'
import DisableReminder from './pages/DisableReminder'
import EnableReminder from './pages/EnableReminder'
import DeleteReminder from './pages/DeleteReminder'
import ViewReminder from './pages/ViewReminder'
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login/>}></Route>
      <Route path="/home" element={ <Home/>}></Route>
      <Route path='/setreminder' element={< SetReminder/>}></Route>
      <Route path='/modifyreminder' element={< ModifyReminder/>}></Route>
      <Route path='/disablereminder' element={<DisableReminder/>}></Route>
      <Route path='/enablereminder' element={<EnableReminder/>}></Route>
      <Route path='/deletereminder' element={< DeleteReminder/>}></Route>
      <Route path='/viewreminder' element={< ViewReminder/>}></Route>
      
    </Routes>
     
    </>
  )
}

export default App
