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
        </div>
      </div>
    </div>
  );
};
export default DetailBookById;
