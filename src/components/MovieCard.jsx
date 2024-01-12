


import React from 'react';

const MovieCard = (props) => {
  
  // Check if film is present
  if (!props.film) {
    return <div>No movie data available</div>;
  }

  // Destructure nested objects
  const {
    description,
    director,
    title,
    release_date,
    image,
    movie_banner,
    original_title,
    original_title_romanised,
    producer,
    rt_score,
    running_time,
    url,
  } = props.film;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{director}</h3>
      <p>{description}</p>
      <p>Release Date: {release_date}</p>
      {/* Add more information as needed */}
      <img src={image} alt={title} />
      {/* You can use other data fields as needed */}
    </div>
  );
};

export default MovieCard;


