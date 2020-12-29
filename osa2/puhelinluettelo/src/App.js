import React, { useState, useEffect  } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Message from "./components/Message";

const App = () => {

  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ message, setMessage ] = useState(null)

  // Haetaan kaikki palvelimen yhteystiedot
   useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // Luodaan uusi yhteystieto
  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
    }
    
    personService
      .create(personObj)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')

        setMessage(`Lisätty ${response.data.name}`)
          setTimeout(() => {
            setMessage(null)
        }, 3000)
      })
  }

  // Poistetaan yhteystieto
    const removePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Poistetaanko ${person.name} ?`)) 

      {personService
      .remove(id)
      .then(ignored => {
        setPersons(persons.filter(person => id !== person.id))

      })
      }
    }
  
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <h2>Lisää uusi yhteystieto</h2>
      <Message message={message} />
      <PersonForm
        name={newName} handlePersonChange= {handlePersonChange} 
        handleNumberChange={handleNumberChange} 
        number={newNumber} 
        addPerson={addPerson}
      />

      <h2>Yhteystiedot</h2>
      <Persons 
      persons={persons} removePerson={removePerson}
      />

    </div>
  )
}

export default App