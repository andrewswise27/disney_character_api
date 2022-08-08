import React from 'react'

const CharacterDetails = ({selectedCharacter}) => {
  return (
    <div>
        <h3>{selectedCharacter.name}</h3>
        <p>Films: {selectedCharacter.films}</p>
        <p>TV Shows: {selectedCharacter.tvShows}</p>
        <img className='selected-character' src={selectedCharacter.imageUrl} alt="Disney character selected"/>
    </div>
  )
}

export default CharacterDetails