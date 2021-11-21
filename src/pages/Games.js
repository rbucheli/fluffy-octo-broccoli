import { Link } from "react-router-dom";
// import { useState } from "react"

function Games(props) {
  const loaded = () => {
    return (
      <div className="flex flex-wrap -mx-1 lg:-mx-4">   
        {props.games.map((game) => (
          <div
            key={game._id}
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Link to={`/games/${game._id}`}>
                <img
                  src={game.image}
                  alt={game.name}
                  className="block h-auto w-full"
                />
              </Link>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  {game.title}
                  <a
                    class="no-underline hover:underline text-black"
                    href="#"
                  ></a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="ml-2 text-sm">{game.price}</p>
                </a>
                <a
                  className="no-underline text-grey-darker"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      {props.games ? loaded() : loading()}
    </div>
  );
}

// return loaded(Games)
// "TypeError: Cannot read properties of null (reading 'map')"
// Error appears if page is refreshed. Removing "Games" as a parameter, refreshing page, and readding it fixes the issue
export default Games;

// "return" something from the function "loaded" and pass "Games" as a parameter
// I need each product to be a link that takes me to its individual show page
// overflow-hidden rounded-lg shadow-lg
// for article tag
