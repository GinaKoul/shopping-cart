import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Hello</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;
