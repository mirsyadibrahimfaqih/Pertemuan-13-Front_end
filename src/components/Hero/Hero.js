import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import styled from 'styled-components';

const Hero = () => {

    const [movie, setMovie] = useState("")

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

        const response = await fetch(url)
        const data = await response.json()

        setMovie(data)
    }

    useEffect(
        function () {
            getDataApi()
            console.log(movie)
        }, []
    )
    console.log(movie)

    return (
  <HeroStyle>
          <div className="container">
            <section className="hero">
                <div className="hero__left">
                    <h2 className="hero__title">{movie.Title}</h2>
                    <h3 className="hero___genre">
                        {movie.Genre}
                    </h3>
                    <p className="hero__description">
                        {movie.Plot}
                    </p>
                    <Button variant="primary">Watch</Button>
                    <Button variant="secondary">buy</Button>
                </div>
                <div className="hero_right">
                    <img
                        className="hero_image"
                        src={movie.Poster}
                        alt="placeholder"
                    />
                </div>
            </section>
        </div>
  </HeroStyle>
    );
}

const HeroStyle = styled.div`
/* Small Screen */
.container {
    margin:3rem 0rem;
 }
 .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    }

    .hero__left {
    margin-bottom: 1rem;
    }

    .hero__title {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
    }

    .hero___genre { 
        color: #b5179e; 
        margin-bottom: 0.4em; 
        font-size: 1.59rem;
    }
    .hero__description { 
        color: #64748b; 
        margin-bottom: 1em; 
        font-size: 1rem;
    }
    .hero__button { 
        padding: 0.8rem 2rem; 
        border: none; 
        border-radius: 10px; 
        background-color: #4361ee; 
        color: #fff;
    }
    .hero_image { 
        max-width: 100%; 
        height: auto;
        margin-top: 1rem;
         border-radius: 25px; 
        }

    /* Medium Screen */
@media (min-width: 768px) {

    }

    /* Large Screen */
 @media (min-width: 992px) {
.container { 
    max-width: 1000px; 
    margin:0 auto; 
}
.hero {
    margin: 1rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    }

.hero_right {
    margin-left: 1rem;
    flex-basis: 60%;
    }
}
`
export default Hero;