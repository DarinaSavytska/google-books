import React from 'react';
import './BookCard.scss';

type Props = {
  book: Book,
};

export const BookCard: React.FC<Props> = ({ book }) => {
  const item = book.volumeInfo;
  const defaultCover = 'https://ruslania.com/pictures/books_photos/30/309288/9785917615868_l.jpg';

  return (
    <div className="BookCard">
      <div>
        <a
          href={item.previewLink}
          target="_blank"
          rel="noreferrer"
          className="BookCard__link"
        >
          <img
            className="BookCard__img"
            src={item.imageLinks?.thumbnail || defaultCover}
            alt="Book cover"
          />
        </a>
      </div>

      <div className="BookCard__info">
        <p  className="BookCard__info--category">
          {item.categories?.filter(autor => autor[0]) || 'No category'}
        </p>

        <h3  className="BookCard__info--title">
          {item.title}
        </h3>

        <p  className="BookCard__info--autor">
          {item.authors?.map(aut => aut).join(', ') || 'Author unknown'}
        </p>
      </div>
    </div>
  );
};
