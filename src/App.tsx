import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import HeadPhone from "./pages/headphones/HeadPhone";
import Speaker from "./pages/speakers/Speaker";
import Earphone from "./pages/earphones/Earphone";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/headphone" element={<HeadPhone />} />
                <Route path="/speaker" element={<Speaker />} />
                <Route path="/earphone" element={<Earphone />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
