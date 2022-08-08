import React from 'react'

const CharacterSelector = ({characters, onCharacterSelect}) => {
    
    const handleSelect = function(event) {
        const chosenCharacter = characters[event.target.value];
        onCharacterSelect(chosenCharacter)
    }

    const characterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>{character.name}</option>
    })
  
    return (
    <select defaultValue="" onChange={handleSelect}>
        <option value="" selected>Choose a Character</option>
        {characterOptions}
    </select>
    
    
  )
}

export default CharacterSelector