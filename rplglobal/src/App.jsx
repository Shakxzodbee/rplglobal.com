import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Nav';
import './App.css'
import HeaderInfo from './components/Header/HeaderInfo';
import AboutSection from './components/AboutSection/AboutSection';
import './media.css';
function App() {

  return (
    <>
    <Navbar/>
    <HeaderInfo/>
    <AboutSection/>
    </>
  )
}

export default App
