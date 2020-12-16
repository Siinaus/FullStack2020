import React from 'react'

/*const Alert = (props) => {
  const name = props.person
  const newName = props.newName

  if(name === newName) {
    window.alert(newName + ' on jo yhteystiedoissasi')
  }
}*/

/* Tämä oli alunperin PersonFormin return-osiossa
{persons.map(person => 
       <Alert key={person.name} person={person.name}/>)}*/

const PersonForm = (props) => {

    const submitName = props.submitName
    const newName = props.newName
    const handleNameChange = props.handleNameChange
    const newNumber = props.newNumber
    const handleNumberChange = props.handleNumberChange
    // const persons = props.persons

    return (
    <div>
    <form onSubmit={submitName}>
      <div>
        nimi: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        numero: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Lisää</button>
      </div>
    </form>
    </div>
  )
    }

export default PersonForm