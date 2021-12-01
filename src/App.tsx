import React, { useState } from 'react';
import { getBooks } from './api/api';

export const App: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event.target.value);
  };

  const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const getBook = async () => {
    const found = await getBooks(searchBook);

    setAllBook(found.items);
    setTotalBook(found.totalItems)
  };

  // const bookForSearch = () => {
  //   const categoryBooks = allBook.filter(book => book.volumeInfo.categories.find(cata => cata === selectedCategory))
  // };

  return (
    <div>
      <h1>Search for books</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearchBook('');
        }}
      >
        <input
          type="text"
          placeholder="Search book"
          value={searchBook}
          onChange={handleInput}
        />

        <button
          onClick={() => {
            getBook();
          }}
        >
          Search
        </button>

        <select
          value={selectedCategory}
          onChange={handleSelected}
        >
          <option value="" selected>All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
      </form>

      <h2>
        {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
      </h2>
      <ul>
        {allBook && allBook.map(book => <li key={book.id}>{book.volumeInfo.title}</li>)}
      </ul>
    </div>
  );
};

export default App;
