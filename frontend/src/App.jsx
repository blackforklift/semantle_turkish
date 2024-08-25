import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import DataTable from './components/DataTable';

function App() {

  const [guessedWord, setGuessedWord] = useState('');
  
  const handleSearch = (searchTerm) => {
    setGuessedWord(searchTerm);
  };

  return (
    <div className="App">
      <Header />
      <SearchBox url={'http://localhost:5000/target-word'} />
      <SearchBox url={'http://localhost:5000/guessed-word'} onSearch={handleSearch}   />

      <DataTable guessedWord={guessedWord} />
    </div>
  );
}

export default App;
