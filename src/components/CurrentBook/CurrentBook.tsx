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
          <div className="CurrentBook__info--details">
            {volume.volumeInfo?.categories?.map(cata => cata).join(', ')}
          </div>

          <h2>
            {volume.volumeInfo?.title}
          </h2>

          <div className="CurrentBook__info--details">
            {volume.volumeInfo?.authors?.map(autor => autor).join(' / ')}
          </div>

          <div className="CurrentBook__info--description" dangerouslySetInnerHTML={{ __html: volume.volumeInfo?.description }} />
        </div>
      </div>
    </div>
  );
};
