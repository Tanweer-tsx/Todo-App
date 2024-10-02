import React from "react";

export function CreateTodo() {
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
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 6,
          border: "2px solid black"
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
