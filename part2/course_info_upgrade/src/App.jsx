const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  const Header = (props) => {
    console.log(props);
    return <h1> {props.course}</h1>;
  };

  const Total = (props) => {
    const totalExercises = props.parts.reduce(
      (sum, part) => sum + part.exercises,
      0
    );

    return <p>Number of exercises {totalExercises}</p>;
  };

  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, exercises) => (
          <p key={exercises}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    );
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
