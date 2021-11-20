// import { useState } from "react"
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id
  const games = props.games
  const game = games.find(p => p._id === id)

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      <img src={game.image} alt={game.name} />
      <header>{game.title}</header>
      <h2>Genre: {game.genre}</h2>
      <p>Description: {game.description}</p>
      <p>Price: {game.price}</p>
      <p>Qty: {game.quantity}</p>
      <Link to='/cart'>
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600" onClick={() => props.addToCart()}>Add to Cart</button>
    </Link>
      </div>
      </div>
  )
}

export default Show