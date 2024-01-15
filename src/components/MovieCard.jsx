


import React from 'react';
import { Col,Card,CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

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
    
  } = props.film;

  return (
    <Col xs="4">
        <Card className=' bg-yellow-600'>
          {/* <img /> */}
          <CardBody>
          <CardTitle > Title: {title}</CardTitle>
          <CardSubtitle> Director: {director}</CardSubtitle>
          <img src={image} alt={title} />
          <CardText  className='py-5 bg-blue-300'> Description: {description}</CardText>
          <CardLink href="#">
          <p> Producer: {producer}</p>
          </CardLink>
          <CardLink href="#">
          <p>Release Date: {release_date}</p>
          </CardLink>

          {/* Add more information as needed */}
      
          {/* You can use other data fields as needed */}
          </CardBody>
        </Card>
    </Col>
  );
};

export default MovieCard;


