import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './components/Loginpage';
import Signpage from './components/Signpage';
import Nav from './components/Home';
import Contact from './components/contact';
import About from './components/about';
import Feedback from './components/Feedback';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signpage />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="/home" element={<Nav/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;