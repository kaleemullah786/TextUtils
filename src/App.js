import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  const [msg, setMsg] = useState({ title: '', body: '' });
  const toggleMode = (() => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
    document.body.classList.toggle("dark");
  })
  const showAlert = ((b, t = 'Sucess!') => {
    setMsg({ title: t, body: b })
  })
  return (
    <>
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
      <TextForm heading={'Your text below'} mode={mode} showMsg={showAlert} />
      <Alert message={msg} mode={mode} />
    </>
  );
}

export default App;
