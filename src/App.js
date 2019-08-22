import React, { useEffect } from "react";
import "./App.css";
import Players from "./Players";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "./duck";

function App() {
  const dispatch = useDispatch();
  const roster = useSelector(state => state.roster);
  const team = useSelector(state => state.team);

  useEffect(() => {
    dispatch(fetchTeams());

    console.log(roster);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{team[0] ? team : "no"}</h1>
        <Players players={roster} />
      </header>
    </div>
  );
}

export default App;
