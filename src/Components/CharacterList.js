import React from 'react'
import ListItem from './ListItem'

const CharacterList = ({characters}) => {

    // const charactersItems = characters.((character, index) => {
    //     return <ListItem character={character} key={index} name={character.name} films={character.films}/>
    // })
    // const newList = [...characters]
    // const info = console.dir(newList)


  return (
    <>
        <select>
            {characters.map ((character, index) => {
            return(
                <option>
                <ListItem key={character["_id"]} 
                name={character.name}
                films={character.films}
                />
                </option>
                )
                })}
        </select>
    </>
  )
}

export default CharacterList