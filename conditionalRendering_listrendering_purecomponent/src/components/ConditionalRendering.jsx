import React from "react";

function ConditionalRendering(props) {
  const students = [
    {
      studentId: 1001,
      name: "Alice Smith",
      age: 20,
      gender: "Female",
      major: "Computer Science",
      gpa: 3.8,
      enrollmentYear: 2021,
      graduationYear: 2025,
      email: "alice.smith@email.com",
    },
    {
      studentId: 1002,
      name: "Bob Johnson",
      age: 22,
      gender: "Male",
      major: "Mathematics",
      gpa: 3.6,
      enrollmentYear: 2020,
      graduationYear: 2024,
      email: "bob.johnson@email.com",
    },
    {
      studentId: 1003,
      name: "Carol White",
      age: 19,
      gender: "Female",
      major: "Biology",
      gpa: 3.9,
      enrollmentYear: 2022,
      graduationYear: 2026,
      email: "carol.white@email.com",
    },
    {
      studentId: 1004,
      name: "David Brown",
      age: 21,
      gender: "Male",
      major: "Physics",
      gpa: 3.4,
      enrollmentYear: 2021,
      graduationYear: 2025,
      email: "david.brown@email.com",
    },
    {
      studentId: 1005,
      name: "Emma Davis",
      age: 20,
      gender: "Female",
      major: "Literature",
      gpa: 3.7,
      enrollmentYear: 2021,
      graduationYear: 2025,
      email: "emma.davis@email.com",
    },
    {
      studentId: 1006,
      name: "Frank Miller",
      age: 22,
      gender: "Male",
      major: "Engineering",
      gpa: 3.5,
      enrollmentYear: 2020,
      graduationYear: 2024,
      email: "frank.miller@email.com",
    },
    {
      studentId: 1007,
      name: "Grace Wilson",
      age: 19,
      gender: "Female",
      major: "History",
      gpa: 3.8,
      enrollmentYear: 2022,
      graduationYear: 2026,
      email: "grace.wilson@email.com",
    },
    {
      studentId: 1008,
      name: "Henry Taylor",
      age: 21,
      gender: "Male",
      major: "Economics",
      gpa: 3.6,
      enrollmentYear: 2021,
      graduationYear: 2025,
      email: "henry.taylor@email.com",
    },
  ];

  return (
    <div>
      <span>MERN</span>
      <span>Stack</span>
    </div>
  );
}

export default ConditionalRendering;

function StudentData({ ele }) {
  return (
    <div style={{ marginTop: 24 }}>
      <h3>Name: {ele?.name}</h3>
      <p>Age: {ele?.age}</p>
      <p>Gender: {ele?.gender}</p>
      <p>Major: {ele?.major}</p>
      <p>GPA: {ele?.gpa}</p>
      <p>Enrollment Year: {ele?.enrollmentYear}</p>
      <p>Graduation Year: {ele?.graduationYear}</p>
      <p>Email: {ele?.email}</p>
      <hr />
    </div>
  );
}
