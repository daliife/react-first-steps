import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="text-white bg-blue-500 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg m-4">React first steps</Link>
      <nav>
        <ul className="flex gap-5 m-4">
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/meetings">Meetings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
