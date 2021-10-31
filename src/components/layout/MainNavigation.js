import { Link } from "react-router-dom";

function MainNavigation(props) {
  const dummyLinks = [
    {
      text: "Tienda",
      url: "/shop",
    },
    {
      text: "Mac",
      url: "/mac",
    },
    {
      text: "iPad",
      url: "/ipad",
    },
    {
      text: "iPhone",
      url: "/iphone",
    },
    {
      text: "Watch",
      url: "/watch",
    },
    {
      text: "AirPods",
      url: "/airpods",
    },
    {
      text: "TV y Casa",
      url: "/hometv",
    },
    {
      text: "Solo con Apple",
      url: "/onlyapple",
    },
    {
      text: "Soporte",
      url: "/support",
    },
  ];

  return (
    <nav className="text-white bg-gray-900 text-xs font-extralight fixed w-full top-0 z-50">
      <ul className="flex items-center justify-between p-4 max-w-4xl max-h-11 mx-auto">
        
        {/* Apple icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
                fill="#fff"
              />
            </svg>
          </Link>
        </li>

        {/* Links */}
        {dummyLinks.map((link) => (
          <li className="hidden items-center md:flex">
            <Link className="opacity-80 hover:opacity-100" to={link.url}>
              {link.text}
            </Link>
          </li>
        ))}

        {/* Search icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
                fill="#fff"
              />
            </svg>
          </Link>
        </li>

        {/* Bag icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
                fill="#fff"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
