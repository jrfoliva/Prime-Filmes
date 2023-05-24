import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Filme from "./Pages/Filme";
import Erro404 from "./Pages/Erro404";
import Header from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            
                <Route path="*" element={ <Erro404 /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;