import React, { useState } from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';
import { CurrentBook } from '../CurrentBook/CurrentBook';
// import { Route } from 'react-router-dom';

type Props = {
  allBook: Book[],
  showMessage: boolean,
  totalBook: string | number
};

export const BookList: React.FC<Props> = ({ allBook, showMessage, totalBook }) => {
  const [selectedBook, setSelectedBook] = useState({} as Book);
  const [pageInfo, setPageInfo] = useState('list');

  console.log(selectedBook);

  const changePageSelectedBook = () => {
    setPageInfo('book');
  };

  const changePageBookList = () => {
    setPageInfo('list');
  };

  const test = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="BookList">
      {/* <Route path="/list">
        < ul className="BookList__list">
          {allBook && allBook.map(book =>
            <li
              key={book.id}
              className="BookList__list--item"
            >
              {console.log(allBook)}
              <BookCard book={book} test={test} />
            </li>
          )}
        </ul>
      </Route> */}

      {/* <Route path="/book">
        <CurrentBook book={selectedBook} />
      </Route> */}

      {showMessage && (
        <h2 className="BookList__count">
          {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
        </h2>
      )}

      {pageInfo === 'list' &&
        < ul className="BookList__list">
          {allBook && allBook.map(book =>
            <li
              key={book.id}
              className="BookList__list--item"
            >
              {/* {console.log(allBook)} */}
              <BookCard book={book} changePage={changePageSelectedBook} test={test} />
            </li>
          )}
        </ul>
      }

      {pageInfo === 'book' && <CurrentBook changePage={changePageBookList} book={selectedBook} />}
    </div >
  );
};
