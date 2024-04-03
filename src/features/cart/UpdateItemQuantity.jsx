import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../slices/cartSlice";

const UpdateItemQuantity = ({ pizzaId, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 items-center">
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type={"round"}
      >
        +
      </Button>
      <p className="font-bold">{children}</p>
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type={"round"}
      >
        -
      </Button>
    </div>
  );
};
export default UpdateItemQuantity;
