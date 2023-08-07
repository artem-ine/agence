import NavbarDefault from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <NavbarDefault />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
