import React from 'react'

const Persons = ({ persons, removePerson }) => {

    return (
      <div>
        <ul>
          {persons.map(person => 
            <li key={person.name}>
              {person.name} 
              {person.number}
              <button onClick={() => removePerson(person.name)}>Poista</button>
            </li>
          )}
        </ul>
      </div>
    )
}

export default Persons