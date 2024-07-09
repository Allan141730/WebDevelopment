
const Total = (props) => {
  const exercise1 = Number(props.exercise1);
  const exercise2 = Number(props.exercise2);
  const exercise3 = Number(props.exercise3);

  return <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>;
}

export default Total;
