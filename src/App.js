import React from 'react';
import groceries from "./groceries";
import "./App.css";

const App = () => (
  <ul>
    {groceries.map(grocery => (
      <li
        key={grocery.item + grocery.type}
        className="ingredient"
      >
        <img
          src={`/res/${grocery.category}.svg`}
          alt={grocery.category}
          width="64px"
        />

        <ul>
          {Object.keys(grocery).map(key => (
            <li
              key={key}
              className="ingredient-detail"
            >
              {grocery[key]}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default App;
