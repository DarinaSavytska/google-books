export async function getBooks(title: string, sort: string, category: string) {
  // добавить обработку ошибок

  // const key = 'AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8';

  const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category}&orderBy=${sort}&maxResults=30`)
    .then(res => res.json());

  return books;
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
