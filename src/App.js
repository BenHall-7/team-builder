import React, { useState } from 'react';
import Team from './components/Team';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState([]);

  const addTeamMember = teamMember => {
    setTeam([...team, teamMember]);
  }
  
  return (
    <div className="App">
      <Team team={team} />
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
