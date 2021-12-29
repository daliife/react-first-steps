import { Link } from 'react-router-dom';
import { BsApple, BsSearch, BsBag } from 'react-icons/bs';

function MainNavigation() {
  const dummyLinks = [
    {
      text: 'Shop',
      url: '/shop',
    },
    {
      text: 'Mac',
      url: '/mac',
    },
    {
      text: 'iPad',
      url: '/ipad',
    },
    {
      text: 'iPhone',
      url: '/iphone',
    },
    {
      text: 'Watch',
      url: '/watch',
    },
    {
      text: 'AirPods',
      url: '/airpods',
    },
    {
      text: 'Home & TV',
      url: '/hometv',
    },
    {
      text: 'Only with Apple',
      url: '/onlyapple',
    },
    {
      text: 'Support',
      url: '/support',
    },
  ];

  return (
    <nav className="text-white bg-opacity-90 bg-gray-900 text-xs font-extralight fixed w-full top-0 z-50">
      <ul className="flex items-center justify-between p-4 max-w-4xl max-h-11 mx-auto">
        {/* Apple icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <BsApple size="0.85rem" />
          </Link>
        </li>

        {/* Links */}
        {dummyLinks.map((link) => (
          <li key={link.text} className="hidden items-center md:flex">
            <Link className="opacity-80 transf hover:opacity-100" to={link.url} key={link.text}>
              {link.text}
            </Link>
          </li>
        ))}

        {/* Search icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <BsSearch size="0.85rem" />
          </Link>
        </li>

        {/* Bag icon */}
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            <BsBag size="0.85rem" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
