import CartItems from "../../components/cart_items/page";
import styles from "../../styles/page";
const Cart = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
