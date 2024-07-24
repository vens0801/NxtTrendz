import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const sumOfAmount = 0

      return (
        <div className="cart-summary-container">
          <div className="end-container">
            <h1 className="total">{`Order Total: Rs ${sumOfAmount}/-`}</h1>
            <p className="count">{`${cartList.length} Items in cart`}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
