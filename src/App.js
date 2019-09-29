import React, { useState } from "react";
import "./App.css";
import Recipe from "./views/Recipe";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  const getSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <Navbar search={getSearch} submit={onSubmit} />
      <Recipe recipes={query} />
    </div>
  );
}

export default App;
