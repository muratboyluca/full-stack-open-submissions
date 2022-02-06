import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(6).fill(0));

  const voteHandler = () => {
    const newVotes = [...vote];
    console.log(newVotes);

    newVotes[selected] += 1;
    setVote(newVotes);
  };

  const anecdoteHandler = () => {
    const randomNummer = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNummer);
  };

  const highestVote = Math.max(...vote);
  console.log(highestVote);
  const isHighestIndex = [...vote].findIndex((e) => e === highestVote);

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <button onClick={voteHandler}>vote</button>
      <button type="button" onClick={anecdoteHandler}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[isHighestIndex]}</p>
      <p>has {highestVote} votes</p>
    </>
  );
};

export default App;
