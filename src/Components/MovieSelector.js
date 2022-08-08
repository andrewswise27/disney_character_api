import React from 'react'

const MovieSelector = ({movies, onMovieSelect}) => {
    
    const handleSelect = (event) => {
        onMovieSelect(event.target.value)
    }
    
    const moviesToSelect = [...movies]
    const movieNodes = moviesToSelect.map((movie, i) => <option value={movie} key={i} onSelect={handleSelect}>{movie}</option>)
    return (
    <select>
        <option value='' onSelect={handleSelect}></option>
        {movieNodes}
    </select>
  )
}

export default MovieSelector