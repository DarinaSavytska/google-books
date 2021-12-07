export async function getBooks(
  title: string,
  sort: string,
  category: string,
  page: number
  ) {
  // const key = 'AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8';

  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category}&orderBy=${sort}&startIndex=${page}&maxResults=30`)
    .then(res => res.json());

  return books;
}

export async function getBookById(id: string) {
  const book = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => res.json());

    return book;
}

/*
{
  "error": {
    "code": 403,
    "message": "SSL is required to perform this operation.",
    "errors": [
      {
        "message": "SSL is required to perform this operation.",
        "domain": "global",
        "reason": "sslRequired"
      }
    ],
    "status": "PERMISSION_DENIED"
  }
}
*/
