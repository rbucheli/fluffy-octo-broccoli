import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Games from "../pages/Games";
import Show from "../pages/Show";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
// Step
function Main(props) {
  const [games, setGames] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]); //define shoppingCart as a hook, setShoppingCart to change the value of shoppingCart, set value to empty array
  const addToCart = (game) => {
    console.log(game);
    setShoppingCart((shoppingCart) => [...shoppingCart, game._id]); //pass the new value to
  };

  const URL = "https://nosferatuu.herokuapp.com/";

  const getGames = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setGames(data);
  };

  const deleteGames = async (id) => {
    // make delete request
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update
    getGames();
  };

  useEffect(() => getGames(), []);

  return (
    <>
      <Nav shoppingCart={shoppingCart} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/games">
            <Games games={games} />
          </Route>
          <Route
            path="/games/:id"
            render={(rp) => (
              <Show
                games={games}
                addToCart={addToCart}
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
                shoppingCart={shoppingCart}
                games={games}
                deleteGames={deleteGames}
                {...rp}
              />
            )}
          />
        </Switch>
      </main>
    </>
  );
}

export default Main;
