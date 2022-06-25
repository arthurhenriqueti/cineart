import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";

export function NewRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
