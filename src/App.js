import React from 'react';
import groceries from "./groceries";

const App = () => (
  <ul>
    {groceries.map(grocery => (
      <li
        key={grocery.item + grocery.type}
        style={{
          display: "flex",
          alignItems: "center",
          float: "left",
          margin: "1.5rem"
        }}
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
              style={{
                textTransform: "capitalize"
              }}
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
