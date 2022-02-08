import React, { useState } from "react";

const Button = ({ type, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {type}
    </button>
  );
};

const Description = ({ type, count }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{count}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback yet - be the first!</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Description type="good" count={good} />
          <Description type="neutral" count={neutral} />
          <Description type="bad" count={bad} />
          <Description type="all" count={total} />
          <Description type="average" count={(good - bad) / total} />
          <Description type="positive" count={(good / total) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <main>
      <h1>give feedback</h1>
      <Button type="good" onClick={handleGood} />
      <Button type="neutral" onClick={handleNeutral} />
      <Button type="bad" onClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </main>
  );
};

export default App;
