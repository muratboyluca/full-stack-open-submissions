import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Total = (props) => {
  const sum =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises {sum}</p>;
};

const Content = (props) => {
  return (
    <div>
      <Part title={props.parts[0].name} number={props.parts[0].exercises} />
      <Part title={props.parts[1].name} number={props.parts[1].exercises} />
      <Part title={props.parts[2].name} number={props.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.number}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;