import './App.css';
import { React, useState } from 'react';

function App() {
  const [userName, setUserName] = useState("")
 
  const Btn1 = () => {
    setUserName("Sukanya")
  }

  const Btn2 = () => {
    setUserName("Sheetal")
  }

  const Btn3 = () => {
    setUserName("Sujata")
  }

  return (
    <div className='container'>
      <button onClick={Btn1}>Button 1</button>
      <button onClick={Btn2}>Button 2</button>
      <button onClick={Btn3}>Button 3</button>
      <h1>{userName}</h1> 
    </div>
  );
}

export default App;