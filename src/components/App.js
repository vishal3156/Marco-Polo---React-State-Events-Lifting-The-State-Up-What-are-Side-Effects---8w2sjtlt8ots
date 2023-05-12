import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [isMarco, setIsMarco] = useState(true);
  const handleClick = () => {
    setIsMarco(!isMarco);
  }
  
  return (
    <div id="main">
      {isMarco ? 
        (<>
          <h1 id="marco-polo">Marco</h1>
          <button id="marco-polo-toggler" onClick={handleClick}>Polo</button>
        </>) 
      : (<>
           <h1 id="marco-polo">Polo</h1>
           <button id="marco-polo-toggler" onClick={handleClick}>Marco</button>
        </>) 
      }
     </div>
  );
}


export default App;
