import { IoMdConstruct } from 'react-icons/io';

function InConstruction() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex items-center justify-center">
      <div className="rounded-xl shadow-lg bg-yellow-300 p- p-7 animate-bounce flex items-center gap-4">
        <IoMdConstruct size="3rem" />
        <div className="content-wrapper">
          <h1 className="text-xl font-bold">Work in progress</h1>
          <p className="text-sm">Sorry for the inconvenience.</p>
        </div>
      </div>
    </div>
  );
}

export default InConstruction;
