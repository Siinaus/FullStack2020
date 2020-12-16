import React from 'react'

const Number = ({person}) => (
    <li>{person.name} {person.number}</li>
  )

const Persons = ({persons}) => {
    return (
      <ul>
        {persons.map(person => 
        <Number key={person.name} person={person}/>)}
      </ul>
    )
  }

export default Persons