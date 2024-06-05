import React , {useState} from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const [name, setName] = useState("")
  return (
    <Welcome name="" />
  )
}


export default App;
