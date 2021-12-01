export async function getBooks(title: string) {
  // добавить обработку ошибок
  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then(res => res.json())

  return books;
}
