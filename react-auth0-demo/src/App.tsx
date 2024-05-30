
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import LoginButton from './components/LoginButton';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginButton/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
