import React from 'react';

import './Filter.css';

export default function Filter() {
  const filter = '';

  const changeFilter = () => {};
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </div>
  );
}
