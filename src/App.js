import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          hej blabla  
        </a>

        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<select>
  <option value="grapefruit">Frida</option>
  <option value="lime">Hanna</option>
  <option selected value="coconut">Kerstin</option>
  <option value="mango">Staffan</option>
</select>
      </header>
    </div>
  );
}

export default App;
