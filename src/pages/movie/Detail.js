import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/constants/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

    const getDetail = async (id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
        await setGenres(data.genres)
    }
    console.log(movie);

    useEffect(() => {
        getDetail(id)
    }, [id])
    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <img src={url_image} alt='' />
            <p>{movie.backdrop_path}</p>
            {/* {
                genres.map(
                    function (item) {
                        return (
                            <p>{item.name}</p>
                        )
                    }
                )
            } */}
            
        </div>
    );
}

export default Detail;
