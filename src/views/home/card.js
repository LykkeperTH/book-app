import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../components/buttons/delete";
import EditButton from "../../components/buttons/edit";
import { path } from "../../route/constant";

const CardBooks = ({ book, hadleDeleteBook }) => {
  const handleDelete = () => {
    const isConfirm = window.confirm("คุณต้องการลบหนังสือหรือไม่");
    if (isConfirm) {
      hadleDeleteBook(book.id);
    }
  };
  return (
    <div className="book read">
      <div className="cover">
        <img className="width100 img" src={book.imageUrl} alt="Avatar" />
      </div>
      <div>
        <h3 className="line-clamp-1">{book.title}</h3>
        <span className="line-clamp-2">{book.description}</span>
      </div>
      <div className="action">
        <DeleteButton onClick={handleDelete}>ลบ</DeleteButton>
        <Link className="color-main" to={`${path.detailBook}/${book.id}`}>
          รายละเอียด
        </Link>
        <EditButton>แก้ไข</EditButton>
      </div>
    </div>
  );
};
export default CardBooks;
