
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './Home'
import Verification from './pages/page2'
import Certificate from './pages/page3'
function App() {
  

  return (
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}> 
    </Route>
    <Route path='/Verification' element ={<Verification />} ></Route>
    <Route path='/Certificate' element={<Certificate />}> 

    </Route>
  </Routes>
  
  </BrowserRouter>
    
  )
}

export default App
