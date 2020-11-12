/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "../../services/book-service";
import DetailBookById from "../../views/book/detail";

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
    return (
      <div className="d-flex width100 justify-ceneter">
        {isLoading && <div className="loader-main "> </div>}
      </div>
    );
  }
  return <DetailBookById book={book} key={book.id} />;
};
export default BookDetailPage;
