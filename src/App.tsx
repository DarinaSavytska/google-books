import React, { useState } from 'react';
import { getBooks } from './api/api';
import { BookList } from './components/BooksList/BookList';
import './App.scss';
import { FormList } from './components/FormList/FormList';

export const App: React.FC = () => {
  const [totalBook, setTotalBook] = useState<string | number>('')
  const [allBook, setAllBook] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [load, setLoad] = useState('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const getBook = async (startBookNumber: number = 0, maxCount: number = 30) => {
    const found = await getBooks(searchBook, sortBy, selectedCategory, startBookNumber, maxCount);

    if (found) {
      setLoad('finish');
    }

    if (!startBookNumber) {
      setAllBook(found.items);
      setTotalBook(found.totalItems)
    } else {
      setAllBook([...allBook, ...found.items]);
    }
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
          getBook={getBook}
          setLoad={setLoad}
        />}
    </div>
  );
};

export default App;
