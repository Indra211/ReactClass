import React from "react";
import { useParams } from "react-router-dom";
import { students } from "../data/students";

export default function DynamicRouting() {
  const { id } = useParams();

  const studentData = students?.filter(
    (student) => student.id == parseInt(id)
  )?.[0];

  return (
    <>
      {studentData?.name ? (
        <div>
          <h1>Name: {studentData?.name}</h1>
          <h3>Age: {studentData?.age}</h3>
          <h3>Grade: {studentData?.grade}</h3>
          <h3>Courses: {studentData?.courses?.join(", ")}</h3>
          <h3>CGPA: {studentData?.gpa}</h3>
        </div>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}
