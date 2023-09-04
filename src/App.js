import './App.css';
import React, { useState } from 'react';
import Forms from './components/Forms';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState("");
  const [alert, setAlert] = useState(null);

  const changeMode = () => {
    if(darkMode !== ""){
      setDarkMode("");
      showAlert("Dark mode disabled");
    } else {
      setDarkMode("bg-gray-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500");
      showAlert("Dark mode enabled");
    }
  }

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
    <Alert darkMode={darkMode} alert={alert} />
    <Forms darkMode={darkMode} setDarkMode={changeMode} showAlert={showAlert} />
    </>
  );
}

export default App;
