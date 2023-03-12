import logo from './assets/logonew.png';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from './component/Header';
import Signup from './pages/Signup';
import Singin from './pages/Signin';
import Profile  from './pages/Profile';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup-up' element={<Signup />}></Route>
        <Route path='/signin-in' element={<Singin />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Nuttapong</code> Kwasong
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/tarertar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Facebook
        </a>
      </header>
    </div>*/
  );
}

export default App;
