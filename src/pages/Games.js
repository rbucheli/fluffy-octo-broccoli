import { Link } from "react-router-dom"
// import { useState } from "react"

function Games(props) {
  // loaded function
  const loaded = () => {
    return props.games.map((game) => (
      <div key={game._id} className="container p-11">
        <Link to={`/games/${game._id}`}>
        <img src={game.image} alt={game.name} /></Link>
        <h3>{game.title}</h3>
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>
};

return props.games ? loaded() : loading();
};

  // return loaded(Games)
  // "TypeError: Cannot read properties of null (reading 'map')" 
  // Error appears if page is refreshed. Removing "Games" as a parameter, refreshing page, and readding it fixes the issue
export default Games;

// "return" something from the function "loaded" and pass "Games" as a parameter
// I need each product to be a link that takes me to its individual show page 