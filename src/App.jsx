import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'



function App() {
  return (
      <BrowserRouter>
        <div className='app-container'>
          <NavBar/>
          <Routes>
            <Route path= '/' element= {<Homepage/>} />
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
)}

export default App

