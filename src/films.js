// Exercise 1: Get the array of all directors.

const getAllDirectors = (array) => {
  let result = array.map((movie) => movie.director);
  return result;
};

// Exercise 2: Get the films of a certain director

const getMoviesFromDirector = (array, director) => {
  const filtered = array.filter((element) => element.director == director);
  return filtered;
};

// Exercise 3: Calculate the average of the films of a given director.

const moviesAverageOfDirector = (array, director) => {
  const filteredMovies = getMoviesFromDirector(array, director);
  const preTotal = filteredMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  const average = Number((preTotal / filteredMovies.length).toFixed(2));
  return average;
};

// Exercise 4:  Alphabetic order by title

const orderAlphabetically = (array) => {
  let titles = array.map((element) => element.title);

  let sortedArray = titles.sort((a, b) => {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  });

  sortedArray.length >= 20
    ? (titles = sortedArray.slice(0, 20))
    : (titles = sortedArray);

  return titles;
};

// Exercise 5: Order by year, ascending

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

// Exercise 6: Calculate the average of the movies in a category

const moviesAverageByCategory = (array, genre) => {
  const filteredMovies = array.filter((movie) => movie.genre.includes(genre));
  const preTotal = filteredMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  const average = Number((preTotal / filteredMovies.length).toFixed(2));
  return average;
};

// Exercise 7: Modify the duration of movies to minutes

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

// Exercise 8: Get the best film of a year

const bestFilmOfYear = (array, year) => {
  const filteredMovies = array.filter((movie) => movie.year == year);
  const maxScore = Math.max(...filteredMovies.map((movie) => movie.score));
  const bestMovies = filteredMovies.filter((movie) => movie.score === maxScore);
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
