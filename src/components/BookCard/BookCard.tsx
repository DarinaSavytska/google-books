import React from 'react';
import './BookCard.scss';

type Props = {
  book: Book,
  changePage: () => void,
  test: (book: Book) => void,
};

export const BookCard: React.FC<Props> = ({ book, changePage, test }) => {
  const volume = book.volumeInfo;
  const defaultCover = 'https://ruslania.com/pictures/books_photos/30/309288/9785917615868_l.jpg';

  return (
    <div className="BookCard">
      <div>
        <a
          href={volume.previewLink}
          target="_blank"
          rel="noreferrer"
          className="BookCard__link"
        >
          <img
            title="Search in google books"
            className="BookCard__img"
            src={volume.imageLinks?.thumbnail || defaultCover}
            alt="Book cover"
          />
        </a>
      </div>

      <div className="BookCard__info">
        <p className="BookCard__info--category">
          {volume.categories?.filter(cat => cat[0]) || 'No category'}
        </p>

        <h3
          className="BookCard__info--title"
          title="More about the book"
          onClick={() => {
            changePage();
            test(book);
          }}
        >
          {volume.title}
        </h3>

        <p className="BookCard__info--autor">
          {volume.authors?.map(aut => aut).join(', ')}
        </p>
      </div>
    </div>
  );
};
