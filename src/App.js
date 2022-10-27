import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  // Setting states
  const [searchString, setSearchString] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = function (event) {
    setSearchString(event.target.value.toLowerCase());
  }

  // Setting side effects
  useEffect(
    function () {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users))
    },
    []
  );

  console.log("Render");

  // Filter the monsters based on search string
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString));
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' placeholder='Search monster' onChangeHandler={onSearchChange}></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}


export default App;
