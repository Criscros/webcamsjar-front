import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>WEBCAMSJAR</code>
        </p>
        <a
          className="App-link"
          href="http://ec2-3-90-83-22.compute-1.amazonaws.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR
        </a>
      </header>
    </div>
  );
}

export default App;
