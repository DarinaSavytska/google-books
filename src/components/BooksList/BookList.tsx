import React from 'react';
import './BookList.scss';
import '../BookCard/BookCard';
import { BookCard } from '../BookCard/BookCard';

type Props = {
  totalBook: string | number,
  allBook: Book[],
};

export const BookList: React.FC<Props> = ({ totalBook, allBook }) => {
  return (
    <div className="BookList">
      {/* <h2 className="BookList__count">
        {totalBook > 0 ? `Found ${totalBook} results` : 'Not found any book'}
      </h2> */}
      <ul className="BookList__list">
        {allBook && allBook.map(book =>
          <li
            key={book.id}
            className="BookList__list--item"
          >
            <BookCard book={book} />
          </li>
        )}
      </ul>
    </div>
  );
};
