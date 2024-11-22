import { useEffect } from "react";
import AdventureExperience from "./AdventureExperience";
import Banner from "./Banner";
import OurPartner from "./OurPartner";
import ToTheMoment from "./ToTheMoment";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Eco-Adventure";
  }, []);

  return (
    <>
      <Banner></Banner>
      <AdventureExperience></AdventureExperience>
      <ToTheMoment></ToTheMoment>
      <OurPartner></OurPartner>
    </>
  );
};

export default Home;
