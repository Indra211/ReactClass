import { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard";

function ComponentLifeCycle() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("useEffect");
  //     return () => {
  //       console.log("useEffect Cleanup");
  //     };
  //   }, [count]);
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      email: "alice.johnson@example.com",
      subjects: ["Mathematics", "Physics"],
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 22,
      email: "bob.smith@example.com",
      subjects: ["Chemistry", "Biology"],
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 21,
      email: "charlie.brown@example.com",
      subjects: ["History", "English"],
    },
    {
      id: 4,
      name: "Diana Prince",
      age: 23,
      email: "diana.prince@example.com",
      subjects: ["Philosophy", "Political Science"],
    },
    {
      id: 5,
      name: "Edward Lewis",
      age: 19,
      email: "edward.lewis@example.com",
      subjects: ["Computer Science", "Mathematics"],
    },
    {
      id: 6,
      name: "Fiona Green",
      age: 20,
      email: "fiona.green@example.com",
      subjects: ["Economics", "Business"],
    },
    {
      id: 7,
      name: "George White",
      age: 22,
      email: "george.white@example.com",
      subjects: ["Psychology", "Sociology"],
    },
    {
      id: 8,
      name: "Hannah Lee",
      age: 21,
      email: "hannah.lee@example.com",
      subjects: ["Art", "Design"],
    },
    {
      id: 9,
      name: "Ian Black",
      age: 23,
      email: "ian.black@example.com",
      subjects: ["Engineering", "Physics"],
    },
    {
      id: 10,
      name: "Julia Brown",
      age: 20,
      email: "julia.brown@example.com",
      subjects: ["Biology", "Chemistry"],
    },
  ];

  return (
    <div>
      {/* <h1>ComponentLifeCycle</h1>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button> */}

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          city={student.email}
          age={student.age}
          subjects={student.subjects}
        />
      ))}
    </div>
  );
}

// export default ComponentLifeCycle;

/*
hoc stands for  high order component
it will one component as an argument then returns a new component

*/

function dataBindings(wrappedComponent) {
  const hoc = (props) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>dataBindings</h1>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        {wrappedComponent(props)}
      </div>
    );
  };

  return hoc;
}

export const NewComponent = dataBindings(ComponentLifeCycle);
