import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import BackgroundImage from './components/StoneyBackground';

function App() {
  return (
    <>
    <div className="App" >
      <NavbarComponent />
      <BackgroundImage />
     </div>
     <h3>Stuff Underneath</h3>
     </>
  );
}

export default App;
