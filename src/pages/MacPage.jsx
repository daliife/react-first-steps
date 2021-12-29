import ComparisonGridComponent from '../components/store/ComparisonGridComponent';
import GalleryComponent from '../components/store/GalleryComponent';
import HomeCard from '../components/home/HomeCard';

function MacPage() {
  const carrouselExampleData = [
    {
      title: 'Macbook Air',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Macbook Pro',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/macbook_pro__b9krsy4o6z5y_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'iMac',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/imac__7zx8uhaubma6_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Mac Pro',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Mac mini',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Compare',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_compare__ggkplbypx5yu_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Pro Display XDR',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_pro_display_light__e7nex6o52poy_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Accessories',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Monterey',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_os__udjqv4ogm8ii_large.svg',
      link: 'https://google.es',
    },
    {
      title: 'Shop Mac',
      url: 'https://www.apple.com/v/mac/home/bj/images/familybrowser/mac_shop__dhr2i9erzhsi_large.svg',
      link: 'https://google.es',
    },
  ];

  return (
    <div className="mac-page-container">
      {/* Mac Caroussel */}
      <div className="bg-white">
        <ul className="max-w-5xl mx-auto py-6 flex flex-grow justify-between gap-12 sm:gap-6">
          {carrouselExampleData.map((carrouselItem, index) => (
            <GalleryComponent key={carrouselItem.title + index} {...carrouselItem} />
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-0">
        <HomeCard></HomeCard>
      </div>

      {/* Comparison table */}
      <div className="bg-gray-100 pb-5">
        <div className="max-w-5xl mx-auto">
          <ComparisonGridComponent></ComparisonGridComponent>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0">
        <HomeCard></HomeCard>
      </div>
    </div>
  );
}

export default MacPage;
