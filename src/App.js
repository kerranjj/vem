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
    dag:
    <input type="text" name="name" />
  </label>
</form>
<label>
  
lagar mat:
  

<select>

  <option value="grapefruit">Frida</option>
  <option value="lime">Hanna</option>
  <option selected value="coconut">Kerstin</option>
  <option value="mango">Staffan</option>
</select></label><input type="submit" value="spara"/>
      </header>
    </div>
  );
}

export default App;
