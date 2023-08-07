import NavbarDefault from "../components/navbar";
import { Outlet } from "react-router-dom";
import Home from "./home";

export default function Root() {
  return (
    <>
      <NavbarDefault />
      <Home />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
