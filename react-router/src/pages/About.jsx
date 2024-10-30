import React, { useState } from "react";

export const About = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.email.includes("@") || !employee.email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
    if (employee.phonenumber.length !== 10) {
      alert("Please enter a valid phone number");
      return;
    }
    setFormData(employee);
    setIsSubmit(true);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={employee.name}
          name="name"
          required
          onChange={(e) =>
            setEmployee((prev) => {
              const { name, value } = e.target;
              return { ...prev, [name]: value };
            })
          }
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={employee.email}
          name="email"
          required
          onChange={handleOnchange}
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={employee.phonenumber}
          name="phonenumber"
          required
          onChange={handleOnchange}
        />
        <textarea
          placeholder="Enter Address"
          value={employee.address}
          name="address"
          onChange={handleOnchange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {isSubmit && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>Form submit data</p>
          <h1>{formData.name}</h1>
          <h1>{formData.email}</h1>
          <h1>{formData.phonenumber}</h1>
          <h1>{formData.address}</h1>
        </div>
      )}
    </div>
  );
};
