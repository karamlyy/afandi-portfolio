import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/Services/Services';
import Contact from './components/contact/Contact';
import ServiceDetail from './components/serviceDetails/ServiceDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App