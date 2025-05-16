import App from "./App.jsx";
import Homepage from "./components/HomePage/HomePage.jsx";
import Products from "./components/Products/Products.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  // {
  //   path: "profile/:name",
  //   element: <Profile />,
  // },
];

export default routes;
