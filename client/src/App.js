// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/NavbarComponent';
// import CurrentLifts from './components/CurrentLifts';



// function App() {
//   return (
//     <div className="App">
//      <NavbarComponent />
//      <CurrentLifts />
//     </div>
//   );
// }

// export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
