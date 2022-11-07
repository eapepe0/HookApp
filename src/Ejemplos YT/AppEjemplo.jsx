import React, { useState, useEffect } from "react";
import List from "./List";
import Item from "./Item";

export default function AppEjemploYT() {
  const initialUsers = [ // creamos unos usuarios de ejemplo
    { id: 1, name: "Coloso" },
    { id: 2, name: "Pepe" },
  ];

  const [users, setUsers] = useState(initialUsers); // ponemos los usuarios de ejemplo en users
  const [text, setText] = useState(""); // aca guardamos el input
  const [search , setSearch] = useState("")

  const onChangeInput = (event) => { // aca se maneja el input
    const inputText = event.target.value;
    setText(inputText); // se guarda en el estado
  };


  const handleAdd = () => { // si agregamos
    setUsers((current) => [...current, { id: Date.now(), name: text }]); // agregamos lo del input como objeto al estado users
    setText("")
  };

  const handleSearch = () =>{
    setSearch(text);
  };

  const filteredUsers = users.filter(user => (user.name.toLowerCase().includes(search.toLowerCase())));

  useEffect(() => {
    //console.log("App Render"); // aca mostramos cuando se renderiza el componente 
  });
  return (
    <div>
      <h1>App</h1>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={handleSearch} className="btn btn-primary mx-2">
        Search
      </button>
      <button onClick={handleAdd} className="btn btn-primary">
        Add
      </button>
      <ul className="list-group">
      <List users={filteredUsers} />
      </ul>
    </div>
  );
}
