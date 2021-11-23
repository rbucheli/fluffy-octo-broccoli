function ShoppingCart(props) {
  const { shoppingCart } = props;
  return (
    <div>
      {props.shoppingCart}
    </div>
  )
} 

export default ShoppingCart;
// ShoppingCart should render new qty
{/* <h1>{shoppingCart.length === 0 && <div>Cart is Empty</div>} </h1>  */}