import React from "react";

const List = ({ items = [], loading = false }) => (
  <ul className={loading ? 'loading' : null}>
    {items.map(([name, value]) => (
      <li key={name}>
        <b>{name}</b>
        <div>{value}</div>
      </li>
    ))}
  </ul>
);

export default List;
