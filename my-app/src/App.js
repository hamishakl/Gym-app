import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CurrentLifts from './components/CurrentLifts';



function App() {
  return (
    <div className="App">
     <NavbarComponent />
     <CurrentLifts />
    </div>
  );
}

export default App;
