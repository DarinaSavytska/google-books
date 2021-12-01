/// <reference types="react-scripts" />

type BookImage = {
  smallThumbnail: string,
  thumbnail: string,
  small: string,
  medium: string,
  large: string,
  extraLarge: string,
};

type BookInfo = {
  title: string,
  publisher: string,
  publishedDate: string,
  pageCount: number,
  categories: string[],
  imageLinks: BookImage,
  language: string,
};

type Book = {
  id: number,
  volumeInfo: BookInfo,
};

type FoundInfo = {
  totalItems: number,
  items: Book[],
};