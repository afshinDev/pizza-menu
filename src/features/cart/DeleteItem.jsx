import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "../../slices/cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type={"small"}>
      delete
    </Button>
  );
};
export default DeleteItem;
