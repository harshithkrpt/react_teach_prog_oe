import {useState} from 'react';
import './App.css';
import LifeCycleHook from './LifeCycleHook';
import ParentComponent from './ParentComponent';

function App() {

  const [isVisble,setIsVisible] = useState(true);

  return (
    <div className="App">
        {/* <ParentComponent /> */}
        
        {
          isVisble ? <LifeCycleHook /> : null
        }

        <button onClick={() => { setIsVisible(!isVisble); }}>Toggle Hello</button>
    </div>
  );
}

export default App;