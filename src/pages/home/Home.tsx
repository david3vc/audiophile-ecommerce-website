import Categories from "../../components/Categories";
import CardSpeaker from "./components/CardSpeaker";
import Hero from "./components/Hero";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Categories />
            <CardSpeaker />
        </div>
    );
};

export default Home;
