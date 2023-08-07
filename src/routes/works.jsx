import { Outlet, Link } from "react-router-dom";
import studyCases from "../studyCasesData";

export default function Works() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-sm text-center">
          Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
          pas à pas comment nous avons été présents pour lancer vos marques
          préférées.
        </h1>
        <br />
        <div>
          <h3>Etudes de cas</h3>
          <ul>
            {studyCases.map((studyCase) => (
              <li key={studyCase.id}>
                <Link to={`/works/${studyCase.id}`}>{studyCase.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
