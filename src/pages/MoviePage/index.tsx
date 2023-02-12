import { MovieDetails } from "../../components/MovieDetails";
import { SearchProvider } from "../../contexts/SearchContext";

export function MoviePage() {


    return (
        <SearchProvider>
            <MovieDetails/>
        </SearchProvider>
    )
}