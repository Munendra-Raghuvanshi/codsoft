
import './App.css'
import { Routes ,Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import Verification from './pages/page2'
import Certificate from './pages/page3'
function App() {
  

  return (
    
  <HashRouter>
  <Routes>
    <Route path='/' element={<Home />}> 
    </Route>
    <Route path='/Verification' element ={<Verification />} ></Route>
    <Route path='/Certificate' element={<Certificate />}> 

    </Route>
  </Routes>
  
  </HashRouter>
    
  )
}

export default App
