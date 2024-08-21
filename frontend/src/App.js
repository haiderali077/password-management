
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';




function App() {


  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [passwordList, setPasswordList] = useState([]);
 

  const addPassword = (event) => {
    setPassword(event.target.value);

  }

  const addTitle = (event) => {
    setTitle(event.target.value);

  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getPasswords').then((response) => {
      setPasswordList(response.data);
    });
  }, [])


  const apiRequest = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password,
     title: title,
    }) ;
  }


  const decrypt = (encrypt) => {
    Axios.post('http://localhost:3001/decryptedpassword', {
      password: encrypt.password,
      id: encrypt.id,
      iv: encrypt.iv,
     }
    ).then((response) => {
      setPasswordList(passwordList.map((value) => {
        return value.id === encrypt.id ? 
        {
          id: value.id,
          password: value.password,
          title: response.data,
          iv: value.iv,
        } : value
      }))
    })
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

      <div className="showPasswords">
        { passwordList.map((value, key) => {
          return (
          <div className="password" onClick={() => {decrypt(
            {
              password: value.password,
              iv: value.iv,
              id: value.id,
            }
          )
        }}  
          key = {key}
          >
            <h3>{value.title}</h3>

          </div>
          )
        })}

      </div>

    </div>
      
  
  );
}

export default App;
  