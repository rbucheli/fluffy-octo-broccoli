import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Something!</div>
      </Link>
    </nav>
  );
}

export default Nav;