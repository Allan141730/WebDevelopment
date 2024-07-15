
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
}

export default Content;
