import React, { useState } from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';
import { CurrentBook } from '../CurrentBook/CurrentBook';

type Props = {
  allBook: Book[],
};

export const BookList: React.FC<Props> = ({ allBook }) => {
  const [selectedBook, setSelectedBook] = useState({} as Book);
  const [pageInfo, setPageInfo] = useState('list');

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
      {pageInfo === 'list' &&
        < ul className="BookList__list">
          {allBook && allBook.map(book =>
            <li
              key={book.id}
              className="BookList__list--item"
            >
              {console.log(allBook)}
              <BookCard book={book} changePage={changePageSelectedBook} test={test} />
            </li>
          )}
        </ul>
      }

      {pageInfo === 'book' && <CurrentBook changePage={changePageBookList} book={selectedBook} />}
    </div >
  );
};
