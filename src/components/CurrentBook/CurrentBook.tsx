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
      {/* <img src="http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73m7azsyCO7ExCJm4L8xiIxVKwXuPtpB-j4iXXHkpayOID078jGh4Z-kGi2eiM0wCQVV1j6fhjUVLSQhd82YRJs5wzEHjAuaUrqDReM7EZfLb7cHY6ATGafxGcZP3jfOp1VQwzv&source=gbs_api" alt="" /> */}
      <h2
        className="CurrentBook__title"
        onClick={changePage}
      >
        Return to books list
        {console.log(volume)}
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
