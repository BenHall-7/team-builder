import React, { useState } from 'react';
import Team from './components/Team';

function App() {
  const [team, setTeam] = useState([]);
  
  return (
    <div className="App">
      <Team team={team}/>
    </div>
  );
}

export default App;
