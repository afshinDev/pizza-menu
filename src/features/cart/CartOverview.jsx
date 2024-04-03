import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../slices/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-green-950 px-4 py-4 text-sm uppercase text-white sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-white sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
