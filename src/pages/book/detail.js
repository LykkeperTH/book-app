import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "../../services/book-service";

const BookDetailPage = () => {
  const param = useParams();
  const [book, setBook] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getBookById();
  }, []);
  const getBookById = async () => {
    const book = await BookService.getBooksById(param.bookId);
    setBook(book);
    setLoading(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{book.id}</div>;
};
export default BookDetailPage;
