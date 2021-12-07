import React, { useState } from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';
import { CurrentBook } from '../CurrentBook/CurrentBook';

type Props = {
  allBook: Book[],
  showMessage: boolean,
  totalBook: string | number,
  setPage:  React.Dispatch<React.SetStateAction<number>>
  page: number,
  getBook: () => void,
  setLoad: (mes: string) => void
};

export const BookList: React.FC<Props> = ({ allBook, showMessage, totalBook, setPage, page, getBook, setLoad }) => {
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

          <div  className="test">
            <button
              type="button"
              className="test__button"
              onClick={() => {
                setLoad('load');
                getBook();
              }}
            >
              Next page
            </button>
          </div>
        </div>
      }

      {pageInfo === 'book' && <CurrentBook changePage={changePageBookList} book={selectedBook} />}
    </div >
  );
};
