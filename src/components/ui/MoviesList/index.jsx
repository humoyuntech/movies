import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"


function MoviesList({movies, totalPages, page, setPage}) {
  return (
    <>
        <Stack>
            {movies.map(movie => (
                <Stack>
                    <Link to={`/movie/${movie.kinopoiskId}`}>
                        <img src={movie.posterUrlPreview} alt={movie.nameRu}/>
                    </Link>
                    <Typography>
                        {movie.nameRu ? movie.nameRu : movie.nameEn}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </>
  );
}

export default MoviesList