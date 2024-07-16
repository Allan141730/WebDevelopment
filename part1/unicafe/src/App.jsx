import { useState } from 'react'



const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good-bad ) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  if (total ===0) {

    return <p>No feedback given</p>;
  }
 
  return (
    <div>

      <h2>statistics</h2>
       <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average.toFixed(1) + '%'} />
      <StatisticLine text="positive" value={positivePercentage.toFixed(1) + ' %'} />
      


      {/* 

      Operator ternary ? is used to validate condicional

        We created a statics method who control diferrents process in the code
        for the moment only show a little information about percentaje, the method 
        toFixed show the numbers only after the decimal point.


      */}

        
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState ([])

  const goodFeedback =() => {
    setAll(allClicks.concat('Good'))
    setGood(good + 1)
  }

  const neutralFeedback =() => {
    setAll(allClicks.concat('Neutral'))
    setNeutral(neutral + 1)
  }

  const badFeedback =() => {
    setAll(allClicks.concat('Bad'))
    setBad(bad + 1)
  }

  
  return (
    <div>
     <h1>give feedback</h1> 

     <Button handleClick={goodFeedback} text = 'good' />
     <Button handleClick={neutralFeedback} text = 'neutral' />
     <Button handleClick={badFeedback} text = 'bad' />
     <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />

     
    </div>
  )
}

export default App