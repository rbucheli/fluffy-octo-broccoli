// import { useState } from "react"
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id
  const games = props.games
  const game = games.find(p => p._id === id)

  return (
    <div className="gamesShow">
      <h1>{game.title}</h1>
      <h2>{game.title}</h2>
      <img src={game.image} alt={game.name} />
      <Link to='/cart'>
    <button>Add to Cart</button>
    </Link>
    </div>
  )
}

export default Show