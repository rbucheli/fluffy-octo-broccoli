import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Games from "../pages/Games";
import Show from "../pages/Show";
import ShoppingCart from "../pages/ShoppingCart";

function Main(props) {
  const [games, setGames] = useState(null);

  const URL = "http://localhost:4000/games/"

  const getGames = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setGames(data);
  };

  const deleteGames = async id => {
    // make delete request
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update
    getGames();
  }

  useEffect(() => getGames(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/games">
          <Games games={games}/>
        </Route>
        <Route
          path="/games/:id"
          render={(rp) => (
            <Show
              games={games}
              deleteGames={deleteGames}
              URL={URL}
              {...rp}
            />
          )}
        />
        <Route
          path="/cart"
          render={(rp) => (
            <ShoppingCart
              games={games}
              deleteGames={deleteGames}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;