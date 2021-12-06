import React, { useState } from 'react';
import { getBooks } from './api/api';
import { BookList } from './components/BooksList/BookList';
import './App.scss';
// import { Link, Route } from 'react-router-dom';

export const App: React.FC = () => {
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState('The Google Story (2018 Updated Edition)');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [showMessage, setShowMessage] = useState<boolean>(false);

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
        {/* <p className="App__title">
          The Google Story (2018 Updated Edition)
        </p> */}

        <form
          className="App__form"
          onSubmit={(event) => {
            event.preventDefault();
            // setSearchBook('');
          }}
        >
          <input
            type="text"
            className="App__form--item App__input"
            placeholder="Search book"
            value={searchBook}
            onChange={handleInput}
          />

          <div>
            {'Categories '}
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
          </div>

          <div>
            {'Sorting by '}
            <select
              value={sortBy}
              onChange={handleSelectedSort}
              className="App__form--item"
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <button
            className="App__form--item"
            onClick={() => {
              getBook();
              setShowMessage(true);
            }}
          >
            Search
          </button>

        </form>

        {showMessage && (
          <h2 className="BookList__count">
            {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
          </h2>
        )}
      </div>

      {/* <Route path="/book-list"> */}
        <BookList
          allBook={allBook}
        />
      {/* </Route> */}

      {totalBook > 0 &&
        <a
          href="#root"
          className="App__buttonUp"
        >
          &uarr;
        </a>
      }
    </div>
  );
};

export default App;
