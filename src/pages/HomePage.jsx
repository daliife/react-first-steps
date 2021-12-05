import InformationBanner from "../components/home/InformationBanner";
import HomeCard from "../components/home/HomeCard";

function HomePage() {
  return (
    <div className="">
      <InformationBanner></InformationBanner>
      <div className="grid grid-cols-1 gap-0">
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
      </div>
    </div>
  );
}
export default HomePage;