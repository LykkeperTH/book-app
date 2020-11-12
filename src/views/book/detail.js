import { Link } from "react-router-dom";

const { default: BackButton } = require("../../components/buttons/back");

const DetailBookById = ({ book }) => {
  return (
    <div>
      <div className="box-detail">
        <h2>{book.title}</h2>
      </div>
      <div className="justify-center d-flex mx-auto book-detail">
        <div className="img-cover">
          <img className="img-detail" src={book.imageUrl} alt="Avatar" />
        </div>
        <div className="detail-cover">
          <div className="book-content">
            <h4 className="mt-0p mb-0p d-block">รายละเอียดและประเภท</h4>
            <span>{book.description}</span>
          </div>
          <div className="book-content">
            <h4 className="mt-0p mb-0p d-block">จำนวนหนังสือ</h4>
            <span>{book.stock}</span>
          </div>
          <div className="book-content">
            <h4 className="mt-0p mb-0p d-block">เข้าชม</h4>
            <span>{book.totalRead}</span>
          </div>
          <div className="book-content">
            <h4 className="mt-0p mb-0p d-block">ความนิยม</h4>
            <span>{book.totalPoint}</span>
          </div>
          <div className="book-content">
            <h4 className="mt-0p mb-0p d-block">ราคา</h4>
            <span>{book.price}</span>
          </div>
          <div className="container width100 justify-center">
            <Link to="/">
              <BackButton>กลับหน้าหลัก</BackButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBookById;
