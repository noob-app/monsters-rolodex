import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setMonsters(res));
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const handleChange = e => setSearchField(e.target.value);
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox {...{handleChange}} />
      <CardList cards={filteredMonsters} />
    </div>
  );
};

export default App;
