/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  //   let sum = 0;

  //   for (let i = 0; i < movies.length; i++) {
  //     sum += parseFloat(movies[i].rate);
  //   }

  const sum = movies.reduce(function(previousSum, movie) {
    return previousSum + parseFloat(movie.rate || 0);
  }, 0);

  const avg = sum / movies.length;

  return Number(avg.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function(movie) {
    // return movie.genre.includes("Drama")

    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  if (!dramaMovies.length) {
    return 0;
  }

  const avg = ratesAverage(dramaMovies);
  return avg;
}

// Iteration 3: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.slice().sort(function(a, b) {
    // return a.year - b.year || a.title.localeCompare(b.title);

    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  let spielbergMovies = movies.filter(function(movie) {
    // return (
    //   movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    // );

    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });

  return spielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
