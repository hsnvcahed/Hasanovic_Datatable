const { getMoviesDB } = require('../model/movies');

async function getMovies(req, res) {
  res.status(200).json(await getMoviesDB());
}

module.exports = { getMovies };
