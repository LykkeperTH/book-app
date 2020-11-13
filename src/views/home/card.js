import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../components/buttons/delete";
import EditButton from "../../components/buttons/edit";
import { path } from "../../route/constant";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const CardBooks = ({ book, hadleDeleteBook, handleUpdateRating }) => {
  const handleDelete = () => {
    const isConfirm = window.confirm("คุณต้องการลบหนังสือหรือไม่");
    if (isConfirm) {
      hadleDeleteBook(book.id);
    }
  };
  const handleRatingChange = (rating) => {
    handleUpdateRating(book.id, rating);
    console.log(rating);
  };
  return (
    <div className="book read">
      <div className="cover">
        <img className="width100 img" src={book.imageUrl} alt="Avatar" />
        {/* <span className="readeye">
          <BsFillEyeFill />
        </span> */}
      </div>
      <div className="width100">
        <h3 className="line-clamp-1">{book.title}</h3>
        <span className="line-clamp-2">{book.description}</span>
      </div>
      <div className="rating-star">
        <Rating
          onChange={handleRatingChange}
          emptySymbol={<BsStar size={20} color="#FFD700" />}
          fullSymbol={<BsStarFill size={20} color="#FFD700" />}
          initialRating={book.rating}
        />
      </div>
      <div className="action2">
        <span>฿{book.price}</span>
        <span>
          <div className="span-initial-right">จำนวน</div>
          {book.stock}
          <div className="span-initial-left">เล่ม</div>
        </span>
      </div>
      <div className="action">
        <DeleteButton onClick={handleDelete}>ลบ</DeleteButton>
        <Link className="color-main" to={`${path.detailBook}/${book.id}`}>
          รายละเอียด
        </Link>
        <Link to={`${path.updateBook}/${book.id}`}>
          <EditButton>แก้ไข</EditButton>
        </Link>
      </div>
    </div>
  );
};
export default CardBooks;
