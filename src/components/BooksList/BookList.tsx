import React, { useState } from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';
import { CurrentBook } from '../CurrentBook/CurrentBook';

type Props = {
  allBook: Book[],
  showMessage: boolean,
  totalBook: string | number,
  getBook: (startBookIndex: number) => void,
  setLoad: (mes: string) => void,
};

export const BookList: React.FC<Props> = ({ allBook, showMessage, totalBook, getBook, setLoad }) => {
  const [selectedBook, setSelectedBook] = useState({} as Book);
  const [pageInfo, setPageInfo] = useState('list');

  const changePageSelectedBook = () => {
    setPageInfo('book');
  };

  const changePageBookList = () => {
    setPageInfo('list');
  };

  const bookSelection = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="BookList">
      {showMessage && (
        <h2 className="BookList__count">
          {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
        </h2>
      )}

      {pageInfo === 'list' &&
        <div>
          < ul className="BookList__list">
            {allBook && allBook.map(book =>
              <li
                key={book.id}
                className="BookList__list--item"
              >
                <BookCard book={book} changePage={changePageSelectedBook} bookSelection={bookSelection} />
              </li>
            )}
          </ul>

          <div className="BookList__pagination">
            {allBook && allBook.length && (
              <button
                type="button"
                className="BookList__pagination--button"
                onClick={() => {
                  setLoad('load');
                  getBook(allBook.length);
                }}
              >
                Load more
              </button>
            )}

          </div>
        </div>
      }

      {pageInfo === 'book' && <CurrentBook changePage={changePageBookList} book={selectedBook} />}
    </div >
  );
};
