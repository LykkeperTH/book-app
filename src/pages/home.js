import React, { useEffect, useState } from "react";
import BookService from "../services/book-service";
import CardBooks from "../views/home/card";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const books = await BookService.getBooks();
    setBooks(books);
    setLoading(false);
  };

  const handleDeleteBook = async (bookId) => {
    console.log(bookId);
    await BookService.deleteBook(bookId);
    getBooks();
  };
  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="d-flex">
      {books.map((book) => {
        return (
          <CardBooks
            book={book}
            key={book.id}
            hadleDeleteBook={handleDeleteBook}
          />
        );
      })}
    </div>
  );
};
export default Home;
