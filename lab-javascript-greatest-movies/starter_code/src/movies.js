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
  //   let spielbergMovies = movies.filter(function(movie) {
  //     // return (
  //     //   movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  //     // );

  //     if (
  //       movie.director === "Steven Spielberg" &&
  //       movie.genre.includes("Drama")
  //     ) {
  //       return true;
  //     }
  //   });

  //   return spielbergMovies.length;

  return movies.reduce(function(accumulator, value) {
    if (
      value.director === "Steven Spielberg" &&
      value.genre.includes("Drama")
    ) {
      accumulator += 1;
    }
    return accumulator;
  }, 0);
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  //   const movieTitles = movies.map(function(movie) {
  //     return movie.title;
  //   });

  //   movieTitles.sort(function(a, b) {
  //     return a.localeCompare(b);
  //   });

  //   return movieTitles.splice(0, 20);

  const movieTitles = movies
    .map(function(movie) {
      return movie.title;
    })
    .sort(function(a, b) {
      return a.localeCompare(b);
    })
    .splice(0, 20);

  return movieTitles;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertDuration(stringDuration) {
  const hourIndex = stringDuration.indexOf("h");

  let hours = 0;
  if (hourIndex >= 0) {
    hours = parseInt(stringDuration.slice(0, hourIndex));
  }

  let minutes = 0;
  if (stringDuration.includes("min")) {
    minutes = parseInt(stringDuration.split(" ").pop());
  }

  return hours * 60 + minutes;
}

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    const newDuration = convertDuration(movie.duration);

    return {
      ...movie,
      duration: newDuration
    };

    // return Object.assign({}, movie, { duration: newDuration });

    // return {
    //     title: movie.title,
    //     year: movie.year,
    //     director: movie.director,
    //     genre: movie.genre,
    //     rate: movie.rate,
    //     duration: newDuration
    // };
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (!movies.length) {
    return null;
  }

  const years = movies.map(function(movie) {
    return movie.year;
  });
  const uniqueYears = years
    .filter(function(year, index) {
      if (years.indexOf(year) === index) {
        return true;
      }
    })
    .sort(function(a, b) {
      return a - b;
    });

  //   let topYear;
  //   let topAvg;

  //   for (const year of uniqueYears) {
  //     const moviesForYear = movies.filter(function(movie) {
  //       if (movie.year === year) {
  //         return true;
  //       }
  //     });
  //     const averageForYear = ratesAverage(moviesForYear);
  //     if (!topAvg || averageForYear > topAvg) {
  //       topAvg = averageForYear;
  //       topYear = year;
  //     }
  //   }

  const top = uniqueYears.reduce(
    function(accumulator, year) {
      const moviesForYear = movies.filter(function(movie) {
        if (movie.year === year) {
          return true;
        }
      });
      const averageForYear = ratesAverage(moviesForYear);
      if (!accumulator.avg || averageForYear > accumulator.avg) {
        accumulator.avg = averageForYear;
        accumulator.year = year;
      }

      return accumulator;
    },
    { year: null, avg: null }
  );

  return (
    "The best year was " + top.year + " with an average rate of " + top.avg
  );
}

// function bestYearAvg(movies) {
//   if (!movies.length) return null;

//   const yearAvg = movies.reduce(function(accumulator, value) {
//     if (!accumulator[value.year]) {
//       accumulator[value.year] = Number(value.rate);
//     } else {
//       accumulator[value.year] += Number(value.rate);
//       accumulator[value.year] /= 2;
//     }
//     return accumulator;
//   }, {});

//   const sortedByRating = Object.entries(yearAvg).sort(function(a, b) {
//     return b[1] - a[1];
//   });

//   const topRating = sortedByRating[0][1];
//   const topYear = sortedByRating[0][0];

//   return (
//     "The best year was " + topYear + " with an average rate of " + topRating
//   );
// }
