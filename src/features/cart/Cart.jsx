import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../../UI/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { clearCart, getCart } from "../../slices/cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;