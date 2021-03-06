/// <reference types="react-scripts" />

type BookImage = {
  smallThumbnail?: string,
  thumbnail?: string,
  small?: string,
  medium?: string,
  large?: string,
  extraLarge?: string,
};

type BookInfo = {
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: string,
  description: string,
  pageCount: number,
  categories: string[],
  imageLinks: BookImage,
  language: string,
  previewLink?: string,
};

type Book = {
  id: string,
  volumeInfo: BookInfo,
};

type FoundInfo = {
  totalItems: number,
  items: Book[],
};