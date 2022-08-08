import React, { useState, useEffect } from 'react';
import CharacterDetails from '../Components/CharacterDetails';
import CharacterList from '../Components/CharacterList';
import CharacterSelector from '../Components/CharacterSelector';
import MovieSelector from '../Components/MovieSelector';


const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [movie, setMovie] = useState('')

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = function(){
        fetch('https://api.disneyapi.dev/characters')
        .then(res => res.json())
        .then(charactersList => setCharacters(charactersList.data))
    }

    const onMovieSelect = (movie) => {
        setMovie(movie)
    };

    const onCharacterSelect = function(character){
        setSelectedCharacter(character);
    }

    const movies = new Set(characters.map((character) => character.films));

    let charactersInMovie = characters
    if (movie){
        charactersInMovie = characters.filter((character) => character.films === movie)
    }

    // function paginated_fetch(
    //     url = is_required("https://api.disneyapi.dev/characters"), // Improvised required argument in JS
    //     page = 1,
    //     previousResponse = []
    //   ) {
    //     return fetch(`${url}&page=${page}`) // Append the page number to the base URL
    //       .then(response => response.json())
    //       .then(newResponse => {
    //         const response = [...previousResponse, ...newResponse]; // Combine the two arrays
      
    //         if (newResponse.length !== 0) {
    //           page++;
      
    //           return paginated_fetch(url, page, response);
    //         }
      
    //         return response;
    //       });
    //   }


  return (
    <>
    <div>Select a Disney Character:</div>
    {/* <CharacterList characters={characters}/> */}
    <MovieSelector movies={movies} onMovieSelect={onMovieSelect}/>
    <CharacterSelector characters={charactersInMovie} onCharacterSelect={onCharacterSelect}/>
    {selectedCharacter ? <CharacterDetails selectedCharacter={selectedCharacter}/> : null}
    </>
  )
}

export default CharacterContainer