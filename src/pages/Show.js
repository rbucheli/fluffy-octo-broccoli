// import { useState } from "react"
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id;
  const games = props.games;
  const game = games.find((p) => p._id === id);

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"> {/*Left Container*/}
        <div className="p-4 md:p-12 text-center lg:text-left">
          <img class="block lg:hidden shadow-xl mx-auto h-48 w-48 bg-cover bg-center" src={game.image} alt={game.name} />
          <header className="text-3xl font-bold pt-8 lg:pt-0">
            {game.title}
          </header>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-yellow-900"></div>
          <p className="pt-4 text-base flex items-center justify-center lg:justify-start">
            Genre: {game.genre}
          </p>
          <p className="pt-2 text-base lg:text-base flex items-center justify-center lg:justify-start">
            Description: {game.description}
          </p>
          <p className="py-2 text-base lg:text-base flex items-center justify-center lg:justify-start">
            Price: {game.price}
          </p>
          <Link to="/cart">
            <button
              className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => props.addToCart(game)}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <img className="lg:rounded-lg shadow-2xl hidden lg:block" src={game.image} alt={game.name} />
      </div>
    </div>
  );
}
export default Show;