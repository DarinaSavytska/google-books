export async function getBooks(
  title: string,
  sort: string,
  category: string,
  startBookNumber: number,
  maxCount: number,
  ) {
  // const key = 'AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8';

  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category}&orderBy=${sort}&startIndex=${startBookNumber}&maxResults=${maxCount}`)
    .then(res => res.json());

  return books;
}

export async function getBookById(id: string) {
  const book = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => res.json());

    return book;
}
