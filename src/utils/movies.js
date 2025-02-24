export const getMovies = (data) => {
  if (!data) return [];

  return data.map(movie => ({
    _id: movie._id,
    category: movie.Genre,
    desc: movie.Plot,
    poster: movie.Poster,
    rate: movie.imdbRating,
    title: movie.Title,
    year: movie.Year,
  }));
}
