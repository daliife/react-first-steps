function NotFound(props) {
  return (
    <div className="max-w-xl mx-auto h-screen flex flex-col items-center justify-center text-center">
      <h2 className="font-sans font-semibold text-5xl max-w-lg mx-auto">The page you're looking for can't be found</h2>
      <input
        className="w-96 mt-10 border-2 p-3 rounded focus:border-blue-400"
        type="text"
        placeholder="Search apple.com"
      />
      <a className="mt-6 text-blue-400" href="https://google.es">
        Or see our site map
      </a>
    </div>
  );
}

export default NotFound;
