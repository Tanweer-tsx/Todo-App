import React, { useState } from "react";
import { Todos } from "./Todos";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          border: "2px solid black"
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          border: "2px solid black"
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 6,
          border: "2px solid black"
        }}
        onClick={() => {
          fetch("http://localhost:3000/addTodo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              "Content-type": "application/json"
            }
          })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
