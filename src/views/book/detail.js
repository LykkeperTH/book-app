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
            <h3 className="mt-0p mb-0p">รายละเอียดและประเภท</h3>
            <span>{book.description}</span>
          </div>
          <div className="book-content">
            <h3 className="mt-0p mb-0p">จำนวนหนังสือ</h3>
            <span>{book.stock}</span>
          </div>
          <div className="book-content">
            <h3 className="mt-0p mb-0p">เข้าชม</h3>
            <span>{book.totalRead}</span>
          </div>
          <div className="book-content">
            <h3 className="mt-0p mb-0p">ความนิยม</h3>
            <span>{book.totalPoint}</span>
          </div>
          <div className="book-content">
            <h3 className="mt-0p mb-0p">ราคา</h3>
            <span>{book.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBookById;
