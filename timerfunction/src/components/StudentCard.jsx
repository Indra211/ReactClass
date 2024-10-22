function StudentCard(props) {
  const { name, city, age, subjects } = props;
  return (
    <div
      style={{
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>
        {name} | {age}
      </h3>
      <p>{city}</p>
      <p>{subjects.join(",")}</p>
    </div>
  );
}

export default StudentCard;
