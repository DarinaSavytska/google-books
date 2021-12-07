import React, { useState } from 'react';
import { getBooks } from './api/api';
import { BookList } from './components/BooksList/BookList';
import './App.scss';
import { FormList } from './components/FormList/FormList';

export const App: React.FC = () => {
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState('The Google Story (2018 Updated Edition)');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [load, setLoad] = useState('');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  console.log(page);

  const getBook = async () => {
    const found = await getBooks(searchBook, sortBy, selectedCategory, page);

    if (found) {
      setLoad('finish');
    }

    setPage((page: number) => page + 30);
    setAllBook(found.items);
    setTotalBook(found.totalItems)
  };

  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__title">Search for books</h1>

        <FormList
          searchBook={searchBook}
          setSearchBook={setSearchBook}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          getBook={getBook}
          totalBook={totalBook}
          setLoad={setLoad}
          setShowMessage={setShowMessage}
          setPage={setPage}
        />
      </div>

      {load === 'load' && (
        <div className="App__preloader">
          <div className="App__preloader--loader"></div>
        </div>
      )}

      {load === 'finish' &&
        <BookList
          allBook={allBook}
          showMessage={showMessage}
          totalBook={totalBook}
          page={page}
          setPage={setPage}
          getBook={getBook}
          setLoad={setLoad}
        />}
    </div>
  );
};

export default App;
