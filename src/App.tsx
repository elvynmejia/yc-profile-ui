import { useEffect, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';

const getApiState = async () => {
  return await axios.get('http://127.0.0.1:3000/health/ok');
}

const App = () => {
  const callCounter = useRef(0);
  const [apiState, setApiState] = useState('');

  // ping API every 5 secods
  useEffect(() => {
    const interval = setInterval(() => {
      getApiState()
      .then((res) => {
        setApiState(res.data);
        callCounter.current = callCounter.current + 1;
      }).catch((e: any) => {
        setApiState(`An error occured. Make sure API is up and running ${e}`);
        callCounter.current = callCounter.current + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>number of calls {callCounter.current}</p>
      <h1>API state: {apiState}</h1>
    </div>
  )
}

export default App
