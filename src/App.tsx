import React, { useState } from 'react';
import { getBooks } from './api/api';
import { BookList } from './components/BooksList/BookList';
import './App.scss';

export const App: React.FC = () => {
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event.target.value);
  };

  const getBook = async () => {
    const found = await getBooks(searchBook);

    setAllBook(found.items);
    setTotalBook(found.totalItems)
  };

  return (
    <div className="App">
      <h1 className="App__title">Search for books</h1>

      <form
        className="App__form"
        onSubmit={(event) => {
          event.preventDefault();
          // setSearchBook('');
        }}
      >
        <input
          type="text"
          className="App__form--item"
          placeholder="Search book"
          value={searchBook}
          onChange={handleInput}
        />

        <button
          className="App__form--item"
          onClick={() => {
            getBook();
          }}
        >
          Search
        </button>

      </form>

        <BookList
          totalBook={totalBook}
          allBook={allBook}
        />
    </div>
  );
};

export default App;
