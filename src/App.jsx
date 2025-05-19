import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  return (
    <>
      <Header>
        <NavBar
          items={[
            { url: "/", name: "Homepage" },
            { url: "/products", name: "Products" },
          ]}
        />
      </Header>
      <main>
        <h1>Hello</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;
