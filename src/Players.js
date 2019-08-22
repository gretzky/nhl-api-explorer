import React from "react";

const PlayerListItem = ({ id, fullName, position, jerseyNumber }) => (
  <li key={id}>
    <strong>
      {jerseyNumber} {fullName}
    </strong>
    <p>{position}</p>
  </li>
);

const Players = ({ players }) => (
  <ul>
    {players.map(player => (
      <PlayerListItem
        key={player.person.id}
        fullName={player.person.fullName}
        jerseyNumber={player.jerseyNumber}
        position={player.position.abbreviation}
      />
    ))}
  </ul>
);

export default Players;
