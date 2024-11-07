import axios from "axios";
import React, { useEffect, useState } from "react";

// http methods are get, post, put, delete, patch
function App() {
  const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const jsonData = await response.json();
  //     console.log(JSON.stringify(jsonData, null, 2));

  //     setData(jsonData || []);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  const postData = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "token 1234",
        },
        // method: "POST",
        // method: "PUT",
        // method: "DELETE",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const postGata = async () => {
    try {
      const response = await axios.post(
        "url",
        { body },
        {
          headers: {},
        }
      );
    } catch (error) {}
  };

  return (
    <div>
      {data?.map((item, index) => (
        <div key={item.id} style={{ margin: "10px" }}>
          {index + 1}. {item.title}
        </div>
      ))}
    </div>
  );
}

export default App;
