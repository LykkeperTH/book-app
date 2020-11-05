import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FaAtlas } from "react-icons/fa";
import BookService from "../../services/book-service";

const AddbookSchema = Yup.object().shape({
  title: Yup.string().required("กรุณากรอกชื่อหนังสือ"),
  description: Yup.string().required("กรุณากรอกข้อมูลของหนังสือ"),
  price: Yup.number().integer().required("กรุณากรอกราคาหนังสือ"),
  stock: Yup.number().integer().required("กรอกจำนวนหนังสือที่เหลือ"),
});

const CreateBookForm = () => {
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      stock: "",
    },

    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: AddbookSchema,
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await BookService.create(values);
      console.log(res);
      alert("สร้างหนังสือสำเร็จ");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="wit">
        <h1>
          <FaAtlas />
          &nbsp; สร้างหนังสือ
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
              <b>จำนวนหนังสือในที่เหลือ</b>
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
export default CreateBookForm;
