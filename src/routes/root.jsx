import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav className="navbar">
        {/* ajouter ici potentiellement un morceau de navbar pour le header pouvant faire passer un parametre movie ou tv dans mes queries pour que home/search/profile montre soit les film soit les serie je me concentre pour le moment sur les films (mais les querries sont déjà potentiellement préparée*/}

        <div className="logo_container">
          <figure>
            <img className="logo" src="../assets/logo.svg" alt="tmdb logo" />
          </figure>
        </div>
        <ul>
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          <li>
            <Link to={`/search`}>Search</Link>
          </li>
          <li>
            <Link to={`/profile`}>Profile</Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
