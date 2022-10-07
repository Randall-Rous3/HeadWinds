
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './pages/About';
import Collections from './pages/Collections';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collections' element={<Collections/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
