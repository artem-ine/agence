import { Outlet } from "react-router-dom";

export default function Works() {
  return (
    <>
      <h1 className="text-sm">
        Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
        pas à pas comment nous avons été présents pour lancer vos marques
        préférées.
      </h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
