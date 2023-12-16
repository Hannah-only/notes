import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Root } from "../component";
import {Register} from "../pages";

const Routespath = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}>
       <Route path="register" element={<Register />} />
    </Route>)
  );

  return <RouterProvider router={router} />;
};

export default Routespath;
