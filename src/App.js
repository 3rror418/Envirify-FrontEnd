import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {

  const HomeView = () => (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
          </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
          </a>
    </header>
  );

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeView} />
      </div>
    </Router>
  );
}

export default App;
