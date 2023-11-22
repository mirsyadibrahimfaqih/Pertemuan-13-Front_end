import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const { title, date, image, genre, id } = props
    const url_image= `https://image.tmdb.org/t/p/w300/${image}`
    return (
        <MovieStyle>
            <img
                className="movie__image"
                src={url_image}
                alt=""
            />
           <Link to={`/movie/${id}`}>
           <h2 className="movie__title">{title}</h2>
           </Link>
            <h4 className="movie__date">{genre}</h4>
            <p className="movie__date">{date}</p>
        </MovieStyle>
    );
}

const MovieStyle = styled.div`
margin-bottom: 1rem;


.movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}
.movie__title {
    color: #4361ee;
    font-size: 1 rem;
    margin-bottom: 0.5rem;
}

.movie__date {
    color: #4361ee;
}
@media (min-width: 768px) {

    flex-basis: 50%;
}

@media (min-width:992px) {

        flex-basis: 25%;
        padding: 1rem;
    
}
`

export default Movie;
