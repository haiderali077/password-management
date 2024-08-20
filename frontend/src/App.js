
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';


function App() {


  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
 

  const addPassword = (event) => {
    setPassword(event.target.value);

  }

  const addTitle = (event) => {
    setTitle(event.target.value);

  }


  const apiRequest = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password,
    title: title,
    }) ;
  }

  

  return (
    <div className="App">
      <div
        className="addPassword">

          <input type="text" placeholder='Password123'
          onChange={addPassword}
          /> 

          <input type="text" placeholder='github'
          onChange={addTitle}
          />

          <button onClick={apiRequest}>Add Password</button>
      </div>

      
       
      </div>
      
  
  );
}

export default App;
  