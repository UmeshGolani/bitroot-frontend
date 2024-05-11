import axios from 'axios';
import './App.css';
import ModalWindow from './Components/Modal';
import { useEffect, useState } from 'react';
import ImageSlider from './Components/ImageSlider';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData(data);
  },[]);

  const fetchData = () => {
    axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
    .then(res => setData(res.data))
    .catch(err => console.error(err));
  }
  return (
    <div className="App">
      {data.map((def,i) => (
        <ModalWindow date={def.date} title={def.title} content={def.content} author={def.author}/>
      ))}
    </div>
    
  );
}

export default App;
