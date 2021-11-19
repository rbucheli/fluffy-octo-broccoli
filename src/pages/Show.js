// import { useState } from "react"
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id
  const games = props.games
  const game = games.find(p => p._id === id)
  

  return (
    <div className="gamesShow">
      <img src={game.image} alt={game.name} />
      <h1>{game.title}</h1>
      <h2>Genre: {game.genre}</h2>
      <p>Description: {game.description}</p>
      <p>Tags: {game.tag}</p>
      <p>Price: {game.price}</p>
      <p>Qty: {game.quantity}</p>
      <Link to='/cart'>
    <button className="btn" onClick={() => props.onAdd(game)} >Add to Cart</button>
    </Link>
    </div>
  )
}

export default Show