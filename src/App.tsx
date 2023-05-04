import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import HeadPhone from "./pages/headphones/HeadPhone";
import Speaker from "./pages/speakers/Speaker";
import Earphone from "./pages/earphones/Earphone";
import HeadPhoneDetail from "./pages/headphones/HeadPhoneDetail";
import { ProductsListContextProvider } from "./context/ProductsListContext";
import EarphoneDetail from "./pages/earphones/EarphoneDetail";
import SpeakerDetail from "./pages/speakers/SpeakerDetail";
import Checkout from "./components/Checkout";

function App() {
    return (
        <ProductsListContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/headphones" element={<HeadPhone />} />
                    <Route path="/headphones/:id" element={<HeadPhoneDetail />} />
                    <Route path="/speakers" element={<Speaker />} />
                    <Route path="/speakers/:id" element={<SpeakerDetail />} />
                    <Route path="/earphones" element={<Earphone />} />
                    <Route path="/earphones/:id" element={<EarphoneDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ProductsListContextProvider>
    );
}

export default App;
