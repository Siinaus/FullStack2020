import React from 'react'

const PersonForm =({addPerson, handlePersonChange, handleNumberChange, name, number}) => {
  return (
    <form onSubmit={addPerson}>
    <div>Nimi: <input type="text" value={name} onChange={handlePersonChange}/></div>
    <div>Numero: <input type="text" value={number} onChange={handleNumberChange} /></div>
    <div>
        <button type="submit">Lisää</button>
    </div>       
    </form>
  )
}


export default PersonForm