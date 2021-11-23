function ShoppingCart(props) {
  const { shoppingCart } = props;
  return (
    <div>
      <h1>{shoppingCart.length === 0 && <div>Cart is Empty</div>} </h1> 
      <br />
      <br />
      {props.shoppingCart}
    </div>
  )
} 

export default ShoppingCart;
// ShoppingCart should render new qty