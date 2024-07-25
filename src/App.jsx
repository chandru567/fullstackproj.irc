import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <Routes>
    <Route path='/l' element={<Login/>}>
    </Route>
    <Route path='/r' element={<Register/>}>
    </Route>
    </Routes>
  )
}

export default App