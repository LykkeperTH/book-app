import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import BookService from "../../services/book-service";
import BookForm from "./form";
import { path } from "../../route/constant";

const UpdateBook = ({ book }) => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (values, formik) => {
    setLoading(true);

    try {
      const res = await BookService.updateBookDetail(book.id, values);
      console.log(res);
      alert("แก้ไขสำเร็จ");
      history.push(path.home);
      formik.resetForm();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <BookForm
      book={book}
      handleSubmit={handleSubmit}
      title="สร้างหนังสือ"
      isLoading={isLoading}
    />
  );
};
export default UpdateBook;
