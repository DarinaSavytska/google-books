import React, { useState } from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';
import { CurrentBook } from '../CurrentBook/CurrentBook';

type Props = {
  allBook: Book[],
};

export const BookList: React.FC<Props> = ({ allBook }) => {
  const [pageInfo, setPageInfo] = useState('list');

  const changePageSelectedBook = () => {
    setPageInfo('book');
  };

  const changePageBookList = () => {
    setPageInfo('list');
  };

  return (
    <div className="BookList">
      {pageInfo === 'list' && (
        <ul className="BookList__list">
          {allBook && allBook.map(book =>
            <li
              key={book.id}
              className="BookList__list--item"
            >
              <BookCard book={book} changePage={changePageSelectedBook} />
            </li>
          )}
        </ul>
      )}

      {pageInfo === 'book' && <CurrentBook changePage={changePageBookList} />}
    </div>
  );
};
