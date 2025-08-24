import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return(
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good * 100) / total

  if(total === 0){
    return (
    <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {props.good} />
          <StatisticLine text = 'neutral' value = {props.neutral} />
          <StatisticLine text = 'bad' value = {props.bad} />
          <StatisticLine text = 'total' value = {total} />
          <StatisticLine text = 'average' value = {average} />
          <StatisticLine text = 'positive' value = {positive + '%'} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const commentGood = () => {
    const valorG = good + 1
    setGood(valorG)
  }
  const commentNeutral = () => {
    const valorN = neutral + 1
    setNeutral(valorN)
  }
  const commentBad = () => {
    const valorB = bad + 1
    setBad(valorB)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {commentGood} text = 'good' />
      <Button handleClick = {commentNeutral} text = 'neutral' />
      <Button handleClick = {commentBad} text = 'bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    
  )
}

export default App
