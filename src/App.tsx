import React, { useState } from 'react';
import { getBooks } from './api/api';
import { BookList } from './components/BooksList/BookList';
import './App.scss';

export const App: React.FC = () => {
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('relevance');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event.target.value);
  };

  const handleSelectedFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSelectedSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const getBook = async () => {
    const found = await getBooks(searchBook, sortBy, selectedCategory);

    setAllBook(found.items);
    setTotalBook(found.totalItems)
  };

  return (
    <div className="App">
      <div className="App__header">
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

          Categories
          <select
            value={selectedCategory}
            onChange={handleSelectedFilter}
            className="App__form--item"
          >
            <option value="">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>

          Sorting by
          <select
            value={sortBy}
            onChange={handleSelectedSort}
            className="App__form--item"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>

          <button
            className="App__form--item"
            onClick={() => {
              getBook();
            }}
          >
            Search
          </button>

        </form>

        <h2 className="BookList__count">
          {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
        </h2>
      </div>

      <BookList
        totalBook={totalBook}
        allBook={allBook}
      />
    </div>
  );
};

export default App;
