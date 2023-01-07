export const getMovies = () => {
  return fetch(
    `/api/movies/tmdb/movies`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getMovie = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movie/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getGenres = async () => {
  return fetch(
    "/api/movies/tmdb/genres"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getMovieReviews = (id) => {
  return fetch(
    `/api/movies/tmdb/reviews/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingPage = (id) => {
  return fetch(
    `/api/movies/tmdb/upcomingpage/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/reviews/movieImages/${id}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};


export const getPages = async (page) => {
  console.log(page)
  return fetch(
    `/api/movies/tmdb/pages/${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getCredits = (movie_id) => {
  return fetch(
    `/api/movies/tmdb/credits/${movie_id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getActorDetails = (queryKey) => {
  // console.log(args)
  const [, idPart] = queryKey.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/actorDetail/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};


export const searchMovieApi = (movieName) => {
  return fetch(
    `/api/movies/tmdb/searchMovie/${movieName}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getUpcomingMovies = () => {
  return fetch(
    `/api/movies/tmdb/upcoming`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};