import { useFormik } from "formik";
import * as Yup from "yup";
import { FaAtlas } from "react-icons/fa";

const bookSchema = Yup.object().shape({
  title: Yup.string().required("กรุณากรอกชื่อหนังสือ"),
  description: Yup.string().required("กรุณากรอกข้อมูลของหนังสือ"),
  price: Yup.number().integer().required("กรุณากรอกราคาหนังสือ"),
  stock: Yup.number().integer().required("กรอกจำนวนหนังสือที่เหลือ"),
  imageUrl: Yup.string().required("ใส่ลิงค์ภาพ"),
});

const BookForm = ({ title, handleSubmit, book, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      title: book.title || "",
      description: book.description || "",
      price: book.price || "",
      stock: book.stock || "",
      imageUrl: book.imageUrl || "",
    },

    onSubmit: (values) => {
      handleSubmit(values, formik);
    },
    validationSchema: bookSchema,
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="width500">
        <h1>
          <FaAtlas />
          {title}
        </h1>
        <hr></hr>
        <div className="pannal">
          <div className="mt-10p">
            <label htmlFor="title">
              <b>ชื่อหนังสือ</b>
            </label>
            <input
              className="form-add focus-form"
              id="title"
              name="title"
              type="text"
              placeholder="กรุณากรอกชื่อหนังสือ"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && (
              <div className="color-err ">{formik.errors.title}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="description">
              <b>รายละเอียดหนังสือ</b>
            </label>
            <input
              className="form-add focus-form"
              id="description"
              name="description"
              type="text"
              placeholder="กรุณากรอกข้อมูลหของหนังสือ"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && (
              <div className="color-err">{formik.errors.description}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="price">
              <b>ราคา</b>
            </label>
            <input
              className="form-add focus-form"
              id="price"
              name="price"
              type="number"
              placeholder="กรุณากรอกราคา"
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && (
              <div className="color-err">{formik.errors.price}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="stock">
              <b>จำนวนหนังสือ</b>
            </label>
            <input
              className="form-add focus-form"
              id="stock"
              name="stock"
              type="number"
              placeholder="กรุณากรอกจำนวนหนังสือ"
              onChange={formik.handleChange}
              value={formik.values.stock}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stock && (
              <div className="color-err">{formik.errors.stock}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="imageUrl">
              <b>รูปภาพหนังสือ</b>
            </label>
            <input
              className="form-add focus-form"
              id="imageUrl"
              name="imageUrl"
              type="string"
              placeholder="กรุณาใส่ลิงค์"
              onChange={formik.handleChange}
              value={formik.values.imageUrl}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imageUrl && (
              <div className="color-err">{formik.errors.imageUrl}</div>
            )}
          </div>
          <div className="mt-10p">
            <button className="btn" type="submit" disabled={isLoading}>
              <div className="d-flex align-center justify-center">
                {isLoading && <div className="loader"> </div>}
                ตกลง
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default BookForm;
