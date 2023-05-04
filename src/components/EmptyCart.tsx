import icon from '../assets/undraw_empty_cart_co35.svg';

const EmptyCart = () => {
  return (
    <div className="container-empty-cart">
        <div className="container-empty-cart__icon">
            <img src={icon} alt="" />
        </div>
        <div className="container-empty-cart__description">
            Your cart is empty
        </div>
        <div className="container-empty-cart__text">
            Looks like you haven´t made your menu yet.
        </div>
    </div>
  )
}

export default EmptyCart