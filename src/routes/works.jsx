import { Outlet, Link } from "react-router-dom";
import studyCases from "../studyCasesData";
import NavbarDefault from "../components/navbar";

export default function Works() {
  return (
    <>
      <NavbarDefault />
      <h1 className="text-sm">
        Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
        pas à pas comment nous avons été présents pour lancer vos marques
        préférées.
      </h1>
      <div id="detail">
        <Outlet />
      </div>
      <div>
        <h2>Works</h2>
        <ul>
          {studyCases.map((studyCase) => (
            <li key={studyCase.id}>
              <Link to={`/works/${studyCase.id}`}>{studyCase.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
