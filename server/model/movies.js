const db = require('../db');

async function getMoviesDB() {
  const { rows } = await db.query('Select * from movies');

  console.log(rows);

  if (rows.length > 0) return rows;
  throw new Error('No movies found');
}

module.exports = { getMoviesDB };
