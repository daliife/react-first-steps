function InConstruction() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex items-center justify-center">
      <div className="rounded-xl shadow-lg bg-yellow-300 p- p-7 flex gap-4 animate-pulse">
        <img src="http://place-puppy.com/50x50" alt="Placeholder Puppy" />
        <div className="content">
          <h1 className="text-xl font-bold">Work in progress</h1>
          <p className="text-sm">Sorry for the inconvinience.</p>
        </div>
      </div>
    </div>
  );
}
export default InConstruction;
