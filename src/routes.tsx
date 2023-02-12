import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage";
import { Search } from "./pages/Search";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}