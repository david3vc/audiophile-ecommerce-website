import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import HeadPhone from "./pages/headphones/HeadPhone";
import Speaker from "./pages/speakers/Speaker";
import Earphone from "./pages/earphones/Earphone";
import HeadPhoneDetail from "./pages/headphones/HeadPhoneDetail";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/headphones" element={<HeadPhone />} />
                <Route path="/headphones/:id" element={<HeadPhoneDetail />} />
                <Route path="/speakers" element={<Speaker />} />
                <Route path="/earphones" element={<Earphone />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
