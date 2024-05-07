import Delivery from "./Delivery";
import Feature from "./Feature";
import PopularBurgers from "./PopularBurgers";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurgers />
      <Delivery />
    </div>
  );
};

export default Home;
