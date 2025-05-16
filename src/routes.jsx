import App from "./App.jsx";
import Homepage from "./components/HomePage/HomePage.jsx";
import ShopPage from "./components/ShopPage/ShopPage.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shoppage", element: <ShopPage /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  // {
  //   path: "profile/:name",
  //   element: <Profile />,
  // },
];

export default routes;
