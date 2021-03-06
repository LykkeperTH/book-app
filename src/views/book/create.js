import React, { useState } from "react";

import BookService from "../../services/book-service";
import BookForm from "./form";

const CreateBook = () => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (values, formik) => {
    setLoading(true);

    try {
      const res = await BookService.create(values);
      console.log(res);
      alert("สร้างหนังสือสำเร็จ");
      formik.resetForm();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <BookForm
      book={{}}
      handleSubmit={handleSubmit}
      title="สร้างหนังสือ"
      isLoading={isLoading}
    />
  );
};
export default CreateBook;
