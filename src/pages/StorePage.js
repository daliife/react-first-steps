import exampleImage from "../resources/images/mac-item.png";
import cardImage from "../resources/images/card-image.jpg";

function StorePage() {
  const dummyCaroussel = [
    {
      title: "Mac 1",
      url: "http://place-puppy.com/160x90",
      link: "https://google.es",
    },
    {
      title: "Mac 1",
      url: "http://place-puppy.com/160x90",
      link: "https://google.es",
    },
    {
      title: "Mac 1",
      url: "http://place-puppy.com/160x90",
      link: "https://google.es",
    },
    {
      title: "Mac 1",
      url: "http://place-puppy.com/160x90",
      link: "https://google.es",
    },
    {
      title: "Mac 1",
      url: "http://place-puppy.com/160x90",
      link: "https://google.es",
    },
  ];

  const dummyCards = [
    {
      title: "Supercharged for pros.",
      price: "From $1999 or $166.58/mo. for 12 mo.",
      model: "macbook pro 14-inch and 16-inch",
      imageUrl: "http://place-puppy.com/160x90",
      linkUrl: "https://apple.com",
    },
    {
      title: "Supercharged for pros.",
      price: "From $1999 or $166.58/mo. for 12 mo.",
      model: "macbook pro 14-inch and 16-inch",
      imageUrl: "http://place-puppy.com/160x90",
      linkUrl: "https://apple.com",
    },
    {
      title: "Supercharged for pros.",
      price: "From $1999 or $166.58/mo. for 12 mo.",
      model: "macbook pro 14-inch and 16-inch",
      imageUrl: "http://place-puppy.com/160x90",
      linkUrl: "https://apple.com",
    },
  ];

  return (
    <div className="pt-1 bg-gray-100">

      {/* PRODUCTS YOU LOVE SECTION */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-400 my-16 max-w-3xl">
          <span className="text-black">Store.</span> The best way to buy the
          products you love
        </h1>
        <div className="caroussel mt-8 mx-6">
          <ul className="flex gap-12">
            {dummyCaroussel.map((item) => (
              <li className="caroussel-element max-w-md">
                <a href={item.link}>
                  <img
                    className="max-h-20"
                    src={exampleImage}
                    alt={item.title}
                  />
                  <p className="mt-2 text-center font-medium text-sm">
                    {item.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="max-w-5xl mx-auto">
        <div className="card-gallery">
          <h1 className="text-3xl font-medium text-gray-400 mt-16 max-w-3xl">
            <span className="text-black">The latest.</span> Take a look at
            what’s new, right now.
          </h1>
        </div>
        <div className="mt-8 pb-10">
          <ul className="flex gap-6">
            {dummyCards.map((item) => (
              <li className="bg-white border-1 rounded-2xl p-8 shadow-xl max-w-lg transition duration-300 ease-in-out transform hover:scale-105">
                <a target="_blank" rel="noreferrer" href={item.linkUrl}>
                  <p className="text-gray-500 text-xs uppercase font-medium">
                    {item.model}
                  </p>
                  <h2 className="mt-3 text-black text-3xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-2 font-light text-base">{item.price}</p>
                  <a href={item.link}>
                    <img
                      className="max-w-xs"
                      src={cardImage}
                      alt={item.title}
                    />
                  </a>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
export default StorePage;
