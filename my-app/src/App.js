import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CurrentLifts from './components/CurrentLifts';
import NewLift from './components/NewLift';



function App() {
  return (
    <div className="App">
     <NavbarComponent />
     <CurrentLifts />
     <NewLift />
    </div>
  );
}

export default App;
