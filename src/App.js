import logo from './logo.gif';
import { SearchForm } from "./components/SearchForm";
import './App.css';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="image is-64x64" alt="logo" />
        <h2 className="title has-text-white">CURP Validator</h2>
        <SearchForm/>
      </header>
    </div>
  );
}

export default App;
