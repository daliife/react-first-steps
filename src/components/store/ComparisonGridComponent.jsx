import React from "react";

const ComparisonGridComponent = () => {
  const dummyGridData = [
    {
      title: "Macbook Air",
      computerImage:
        "https://www.apple.com/v/mac/home/bj/images/overview/compare/compare_mba__fchj615oz0yi_large.png",
      price: "From 999$",
      stats: [
        {
          title: "8-core1",
          description: "CPU",
        },
        {
          title: "8-core1",
          description: "GPU",
        },
        {
          title: "2TB1",
          description: "Maximum configurable storage",
        },
        {
          title: "13,3''",
          description: "Retina display",
        },
        {
          title: "2.8lb.",
          description: "Weight",
        },
      ],
    },
    {
      title: "Macbook Air",
      computerImage:
        "https://www.apple.com/v/mac/home/bj/images/overview/compare/compare_mba__fchj615oz0yi_large.png",
      price: "From 999$",
      stats: [
        {
          title: "8-core2",
          description: "CPU",
        },
        {
          title: "8-core2",
          description: "GPU",
        },
        {
          title: "2TB2",
          description: "Maximum configurable storage",
        },
        {
          title: "13,3''",
          description: "Retina display",
        },
        {
          title: "2.8lb.",
          description: "Weight",
        },
      ],
    },
    {
      title: "Macbook Air",
      computerImage:
        "https://www.apple.com/v/mac/home/bj/images/overview/compare/compare_mba__fchj615oz0yi_large.png",
      price: "From 999$",
      stats: [
        {
          title: "8-core3",
          description: "CPU",
        },
        {
          title: "8-core3",
          description: "GPU",
        },
        {
          title: "2TB3",
          description: "Maximum configurable storage",
        },
        {
          title: "13,3''",
          description: "Retina display",
        },
        {
          title: "2.8lb.",
          description: "Weight",
        },
      ],
    },
  ];

  return (
    <div className="mt-5">
      {/* Table part */}
      <div className="grid grid-cols-3 gap-4">
        {/* ROW IMAGE */}
        {/* TODO: Modular scss funcion with grid? */}
        {dummyGridData.map((item, index) => (
          <div key={item.title + index} className="flex flex-col items-center">
            <img
              className="max-h-28"
              src={item.computerImage}
              alt={item.title}
            />
            <div className="mt-6 text-lg font-semibold">{item.title}</div>
            <div className="mt-2 text-sm font-light">{item.price}</div>
            <button className="my-3 py-1 px-4 bg-blue-500 hover:bg-blue-400 transition duration-300 rounded-2xl text-xs font-light text-white outline-none">
              Buy
            </button>
            <a
              className="text-blue-500 text-sm hover:underline flex justify-center items-center"
              href={item.title}
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <hr className="mt-5 border-b-1 border-gray-300 w-9/12" />
          </div>
        ))}

        {/* SPECIFICATIONS TABLE  */}
        {dummyGridData.map((item) =>
          item.stats.map((element) => (
            <div className="text-center my-3">
              <h1 className="font-semibold text-xl">{element.title}</h1>
              <p className="font-light text-sm text-gray-500">
                {element.description}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Link part */}
      <div className="links mt-8 mb-4 flex gap-8 items-center justify-center">
        <a
          className="text-blue-500 font-light text-xl flex flex-row items-center"
          href="https://google.es"
        >
          Compare all mac models
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          className="text-blue-500 font-light text-xl flex flex-row items-center"
          href="https://google.es"
        >
          Shop Mac
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ComparisonGridComponent;
