import React, { useEffect, useState } from 'react';
import './CurrentBook.scss';
import { getBookById } from '../../api/api';

type Props = {
  changePage: () => void,
  book: Book,
};
export const CurrentBook: React.FC<Props> = ({ changePage, book }) => {
  const [volume, setVolume] = useState({} as Book);

  useEffect(() => {
    getBookById(book.id).then((foundBook) => setVolume(foundBook))
  }, [book.id])

  const cover: BookImage = volume.volumeInfo?.imageLinks;
  const defaultCover = 'https://ruslania.com/pictures/books_photos/30/309288/9785917615868_l.jpg';
  const bookCover = cover?.medium || cover?.small || cover?.smallThumbnail || cover?.thumbnail;

  console.log(bookCover);

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
            {volume.volumeInfo?.categories?.map(cata => <li key={`${book.id}cata${Math.random()}`}>{cata}</li>)}
          </ul>

          <h3>
            {volume.volumeInfo?.title}
          </h3>

          <ul>
            {volume.volumeInfo?.authors?.map(autor => <li key={`${book.id}autor${Math.random()}`}>{autor}</li>)}
          </ul>

          <p>
            {volume.volumeInfo?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
