// Exercise 1

const getAllDirectors = (array) => {
  let result = array.map((movie) => movie.director);
  return result;
};

// Exercise 2

const getMoviesFromDirector = (array, director) => {
  const filtered = array.filter((element) => element.director == director);
  return filtered;
};

// Exercise 3

const moviesAverageOfDirector = (array, director) => {
  const filteredMovies = getMoviesFromDirector(array, director);
  let preTotal = filteredMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  let average = Number((preTotal / filteredMovies.length).toFixed(2));
  return average;
};

// Exercise 4

const orderAlphabetically = (array) => {
  let titles = array.map((element) => element.title);

  let sortedArray = titles.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  );

  return sortedArray.slice(0, 20);
};

// Exercise 5

const orderByYear = (array) => {
  const arrayCopy = [...array];

  arrayCopy.sort((a, b) => {
    if (a.year - b.year === 0) {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    }
    return a.year - b.year;
  });

  return arrayCopy;
};

// Exercise 6

const moviesAverageByCategory = (array, genre) => {
  const filteredMovies = array.filter((movie) => movie.genre.includes(genre));
  let preTotal = filteredMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  let average = Number((preTotal / filteredMovies.length).toFixed(2));
  return average;
};

// Exercise 7

const hoursToMinutes = (array) => {
  let newArray = array.map((movie) => {
    if (typeof movie.duration === 'string') {
      let [hours, minutes] = movie.duration.split(' ');
      hours = parseInt(hours);
      minutes = parseInt(minutes);

      if (!hours) return { ...movie, duration: Number(minutes) };
      if (!minutes) return { ...movie, duration: Number(hours * 60) };

      return { ...movie, duration: Number(hours * 60 + minutes) };
    }
    return { ...movie };
  });

  return newArray;
};

// Exercise 8

const bestFilmOfYear = (array, year) => {
  const filteredMovies = array.filter((movie) => movie.year == year);
  let maxScore = Math.max(...filteredMovies.map((movie) => movie.score));
  let bestMovies = filteredMovies.filter((movie) => movie.score === maxScore);
  return bestMovies;
};

/*
-

The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
