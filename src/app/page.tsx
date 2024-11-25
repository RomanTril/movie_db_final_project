
import MovieList from "@/component/MovieList/MovieList";
import AllMovies from "@/component/AllMovies/AllMovies";

import {getAllMovies} from "@/service/movie.service";


export default async function Home({ searchParams }: { searchParams: { page?: string } }) {

    const page = parseInt(searchParams.page || "1", 10);

    const {results, total_pages} = await getAllMovies(page);

    return (
    <div>
        <MovieList/>
        <AllMovies movies={results} currentPage={page} totalPages={total_pages} />
    </div>
  );
}
