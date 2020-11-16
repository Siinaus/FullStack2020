import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({good, neutral, bad}) => {

  const total = good + bad + neutral
  const average = ((good * 1) + (bad * -1) + (neutral * 0))/(good + bad + neutral)
  const positive = (good/(good + bad + neutral))*100

  if(total > 0) {
  return (
    <div>
      <h2>Tulokset</h2>
      <StatisticLine text="Hyvä palaute: " value ={good} />
      <StatisticLine text="Neutraali palaute: " value ={neutral} />
      <StatisticLine text="Huono palaute: " value ={bad} />
      <StatisticLine text="Palaute yhteensä: " value ={total} />
      <StatisticLine text="Palautteen keskiarvo: " value ={average} />
      <StatisticLine text="Palautteesta positiivista: " value ={positive} />
    </div>
  )
  }
  return (
    <div>
      <p>Palautetta ei ole vielä annettu</p>
    </div>)
}

const StatisticLine = ({text, value}) => {

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button onClick={addGood} text='Hyvä' />
      <Button onClick={addNeutral} text='Neutraali' />
      <Button onClick={addBad} text='Huono' />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)