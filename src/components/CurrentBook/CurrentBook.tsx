import React from 'react';
import './CurrentBook.scss';

type Props = {
  changePage: () => void,
  book: Book,
};

export const CurrentBook: React.FC<Props> = ({ changePage, book }) => {
  const volume = book.volumeInfo;
  const cover: BookImage = volume.imageLinks;
  const defaultCover = 'https://ruslania.com/pictures/books_photos/30/309288/9785917615868_l.jpg';
  const bookCover = cover?.extraLarge || cover?.large || cover?.medium || cover?.small || cover?.smallThumbnail || cover?.thumbnail;

  return (
    <div className="CurrentBook">
      <h2
        className="CurrentBook__title"
        onClick={changePage}
      >
        Return to books list
      </h2>

      <div className="CurrentBook__book">
        <img
          className="CurrentBook__book--img"
          src={bookCover || defaultCover}
          alt="Book cover"
        />

        <div className="CurrentBook__info">
          <ul>
            {volume.categories?.map(cata => <li key={book.id}>{cata}</li>)}
          </ul>

          <h3>
            {volume.title}
          </h3>

          <ul>
            {volume.authors.map(autor => <li key={book.id}>{autor}</li>)}
          </ul>

          <p>
            {volume.description}
          </p>
        </div>
      </div>
    </div>
  );
};
