import exampleImage from '../../resources/images/iphone-image.png';

function Homecard() {
  return (
    <div className="w-100 bg-gray-50 text-gray-900 text-sm font-normal text-center min-h-96 relative">
      <div className="pt-9">
        <h2 className="text-5xl font-semibold">iPhone 13 Pro</h2>
        <h3 className="text-2xl font-normal mt-1">Prodigioso Pro</h3>
        <p className="mt-2 text-gray-400 font-normal text-lg" aria-label="Disponible el veintiséis de octubre">
          Disponible el 26/10
        </p>
        <div className="no-underline text-blue-500 mt-3">
          <a href="/todo">Más información</a>
          <a className="ml-8" href="/todo">
            Más información
          </a>
        </div>
        <div className="">
          <img src={exampleImage} alt="iPhone13" />
        </div>
      </div>
    </div>
  );
}
export default Homecard;
