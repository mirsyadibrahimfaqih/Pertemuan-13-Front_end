import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/constants/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const backdropImageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

    const getDetail = async (id) => {
        const data = await GetDetailMovie(id);
        await setMovie(data);
        await setGenres(data.genres);
    };

    useEffect(() => {
        getDetail(id);
    }, [id]);

    return (
        <DetailStyles backdropImageUrl={backdropImageUrl}>
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        <h1 className="hero__title">{movie.title}</h1>
                        <p className="hero___genre">{genres.map(item => item.name).join(', ')}</p>
                        <p className="hero__description">{movie.overview}</p>
                    </div>
                    <img className="hero_image" src={url_image} alt='' />
                </div>
            </div>
        </DetailStyles>
    );
};

const DetailStyles = styled.div`
    .container {
        margin: 3rem 0rem;
        position: relative;
    }

    .hero {
        position: relative;
        display: flex;
        text-align: left;
        background-image: url(${props => props.backdropImageUrl});
        background-size: cover;
        background-position: center;
        height: 50vh;
        border-radius: 25px;
        overflow: hidden;
    }

    .hero__left {
        flex-basis: 60%;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 25px;
        color: white;
    }

    .hero__title {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    .hero___genre {
        margin-bottom: 0.4em;
        font-size: 1.59rem;
    }

    .hero__description {
        color: #64748b;
        margin-bottom: 1em;
        font-size: 1rem;
    }

    .hero_image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
        flex-basis: 40%;
    }

    h2 {
        text-align: center;
    }
`;

export default Detail;
