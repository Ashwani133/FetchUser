import './App.css'
import { RandomUser } from './components/RandomUser'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Technology from './pages/Technology'
import Detail from './pages/Detail'
import About from './pages/About'
function App() {

  return (
    <Router>
      <Navbar className='bg-white'/>
      <Routes>
        <Route path = "/" element = {<RandomUser />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path='/technology' element = {<Technology />}/>
        <Route path='/detail' element = {<Detail />}/>
      </Routes>
    </Router>
  )
}

export default App
