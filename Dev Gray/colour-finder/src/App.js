
import { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Inputform from './Components/Inputform';
function App() {
  const [cfind, setcfind] = useState('')
  const [cname, setcName] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!cname) return
    setcName('')
    setcfind(cname);
  }
  return (
    <div className="App">
      <Header />
      <Content cname={cfind}/>

      <Inputform 
      cname={cname}
      setcName={setcName}
      handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
