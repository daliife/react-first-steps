import InformationBanner from "../components/layout/InformationBanner";
import HomeCard from "../components/layout/HomeCard";

function HomePage() {
  return (
    <div className="">
      <InformationBanner></InformationBanner>
      <HomeCard></HomeCard>
      <HomeCard></HomeCard>
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
