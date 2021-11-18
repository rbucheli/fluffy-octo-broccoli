import { Link } from "react-router-dom"
// import { useState } from "react"

function Games(props) {
  // loaded function
  const loaded = () => {
    return props.games.map((game) => (
      <div key={game._id} className="game">
        <Link to={`/games/${game._id}`}><h1>{game.name}</h1></Link>
        <img src={game.image} alt={game.name} />
        <h3>{game.title}</h3>
      </div>
    ));
  };
  return loaded(Games)
  // "return" something from the function "loaded" and pass "Games" as a parameter
}

export default Games;

// 