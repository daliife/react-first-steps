function InformationBanner(props) {
  return (
    <div className="w-100 bg-gray-200 text-gray-600 text-sm font-normal text-center">
      <div className="mx-auto max-w-2xl py-3 px-5 min-h-11 h-11 inline-block">
        <a className="text-blue-500 hover:underline items-center" href="/">
          Compra online{' '}
        </a>
        con la ayuda de Especialistas y disfruta de envío gratuito sin contacto físico.
      </div>
    </div>
  );
}

export default InformationBanner;
