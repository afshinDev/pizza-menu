import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./UI/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as actionUpdateOrder } from "./features/order/UpdateOrder";
import AppLo from "./UI/AppLo";

const router = createBrowserRouter([
  {
    element: <AppLo />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: actionUpdateOrder,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;