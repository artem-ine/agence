import NavbarDefault from "../components/navbar";
import { Outlet } from "react-router-dom";
import "../index.css";

export default function Root() {
  return (
    <>
      <div>
        <NavbarDefault />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
