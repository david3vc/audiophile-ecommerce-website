import Categories from "../../components/Categories";
import CardSpeaker from "./components/CardSpeaker";
import ContainerCardsProduct2 from "./components/ContainerCardsProduct2";
import Hero from "./components/Hero";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Categories />
            <CardSpeaker />
            <ContainerCardsProduct2 />
        </div>
    );
};

export default Home;
