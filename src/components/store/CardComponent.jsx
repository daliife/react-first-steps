import cardImage from '../../resources/images/card-image.jpg';

function CardComponent(props) {
  return (
    <li className="bg-white border-1 rounded-2xl p-8 shadow-xl max-w-lg transition duration-300 ease-in-out transform hover:scale-105">
      <a target="_blank" rel="noreferrer" href={props.linkUrl}>
        <p className="text-gray-500 text-xs uppercase font-medium">{props.model}</p>
        <h2 className="mt-3 text-black text-3xl font-semibold">{props.title}</h2>
        <p className="mt-2 font-light text-base">{props.price}</p>
        <img className="max-w-xs" src={cardImage} alt={props.title} />
      </a>
    </li>
  );
}
export default CardComponent;
