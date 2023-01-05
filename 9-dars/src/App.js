import './App.css';
import Foot from './components/Footer';
import Us from './components/Us';
import Shop from './components/Shop';
import New from './components/New';
import Opa from './components/Opa';
import Drone from './components/Drone';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Logo from './components/Logo';
import Style from './components/Style';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Logo/>
      <Style/>
      <Drone/>
      <Opa/>
      <New/>
      <Shop/>
      <Us/>
      <Foot/>
    </div>
  );
}

export default App;
