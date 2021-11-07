import GalleryComponent from "../components/store/GalleryComponent";
import CardComponent from "../components/store/CardComponent";

function StorePage(props) {
  const carrouselExampleData = [
    {
      title: "Mac",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-mac-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1632870674000",
      link: "https://google.es",
    },
    {
      title: "iPhone",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1630706116000",
      link: "https://google.es",
    },
    {
      title: "iPad",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783381000",
      link: "https://google.es",
    },
    {
      title: "Apple Watch",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1631823475000",
      link: "https://google.es",
    },
    {
      title: "AirPods",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1633718741000",
      link: "https://google.es",
    },
    {
      title: "AirTag",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
      link: "https://google.es",
    },
    {
      title: "Apple TV",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783378000",
      link: "https://google.es",
    },
    {
      title: "HomePod mini",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1633355783000",
      link: "https://google.es",
    },
    {
      title: "Accessories",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202109?wid=400&hei=260&fmt=png-alpha&.v=1629942986000",
      link: "https://google.es",
    },
  ];

  const cardsExampleData = [
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
      <section className="max-w-5xl mx-auto">
        {/* PRODUCTS YOU LOVE SECTION */}
        <h1 className="text-5xl font-semibold text-gray-400 my-16 max-w-3xl">
          <span className="text-black">Store.</span> The best way to buy the
          products you love
        </h1>
        <div className="caroussel mt-8 mx-6">
          <ul className="flex flex-grow justify-between gap-12">
            {carrouselExampleData.map((item) => (
              <GalleryComponent {...item} />
            ))}
          </ul>
        </div>

        {/* CARDS SECTION */}
        <div className="card-gallery">
          <h1 className="text-3xl font-medium text-gray-400 mt-16 max-w-3xl">
            <span className="text-black">The latest.</span> Take a look at
            what’s new, right now.
          </h1>
        </div>
        <div className="mt-8 pb-10">
          <ul className="flex gap-6">
            {cardsExampleData.map((item) => (
              <CardComponent {...item} />
            ))}
          </ul>
        </div>

        {/* CARDS SECTION 2 */}
        <div className="card-gallery">
          <h1 className="text-3xl font-medium text-gray-400 mt-8 max-w-3xl">
            <span className="text-black">The latest.</span> Take a look at
            what’s new, right now.
          </h1>
        </div>
        <div className="mt-8 pb-10">
          <ul className="flex gap-6">
            {cardsExampleData.map((item) => (
              <CardComponent {...item} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default StorePage;