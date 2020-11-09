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
  const handleUpdateRating = async (bookId, rating) => {
    try {
      const book = await BookService.updateRating(bookId, rating);
      const bookIndex = books.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        const newBooks = [...books];
        newBooks[bookIndex].rating = book.rating;
        setBooks(newBooks);
      }
    } catch (error) {
      console.log(error);
    }
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
            handleUpdateRating={handleUpdateRating}
          />
        );
      })}
    </div>
  );
};
export default Home;
