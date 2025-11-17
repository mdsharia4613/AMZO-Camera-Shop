import HeroSection from "./home/HeroSection";
import Home_img_2 from "./home/Home_img_2";
import Services from "./home/Services";
import TopRating from "./products/TopRating";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Services></Services>
      <Home_img_2></Home_img_2>
      <TopRating></TopRating>
    </div>
  );
}
