import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          setPosts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchData();
  }, [posts]);

  function handleDelete(id) {
    alert(`The id: ${id} has been deleted`);
  }

  function handleEdit(row) {
    alert("Estoy Editando!");
  }

  return (
    <Table posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />
  );
}
