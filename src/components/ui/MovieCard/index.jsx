/* eslint-disable react/prop-types */
import { Box, Rating, Stack, Tooltip, Link } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'
import styles from './MovieCard.module.css';

function MovieCard({movie}) {
  return (
    <Stack sx={{m: 0.3}}>
    <RouterLink to={`/movie/${movie.kinopoiskId}`}>
        <img src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.img}/>
    </RouterLink>
    <Link sx={{width: "200px"}} component={RouterLink} to={`/movie/${movie.kinopoiskId}`} textAlign="center">
        {movie.nameRu ? movie.nameRu : movie.nameEn}
    </Link>
    {
      movie.ratingKinopoisk && (
        <Stack alignItems="center">
          <Tooltip title={`${movie.ratingKinopoisk} /10`}/>
          <Box>
             <Rating name="read-only" value={movie.ratingKinopoisk / 2} readOnly />
          </Box>
        </Stack>
      )
    }
</Stack>
  )
}

export default MovieCard

