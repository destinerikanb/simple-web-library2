import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

export const BookForm = ({ bloc }) => {
  const navigate = useNavigate();

  const { params, getDataById, handleAdd, handleUpdate } = bloc();

  useEffect(() => {
    if (params.id) {
      getBook();
    }
  }, []);

  const getBook = async () => {
    const response = await getDataById();
    formik.values.id = response.data.id;
    formik.values.name = response.data.title;
    formik.values.price = response.data.description;
    formik.setFieldValue(response.data);
    console.log(response);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      titlr: "",
      description: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("This filed should not be empty!"),
      title: Yup.string().required("This field should not be empty!"),
      description: Yup.string().required("This field should not be empty!"),
    }),
    onSubmit: () => {
      if (params.id) {
        handleUpdate(formik.values);
      } else {
        handleAdd(formik.values);
      }
    },
  });

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="bookId" className="form-label">
          Id
        </label>
        <input
          type="text"
          className="form-control"
          id="bookId"
          aria-describedby="emailHelp"
          name="id"
          value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.id && formik.touched.id && (
          <small className="text-danger">{formik.errors.id}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="bookTitle" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="bookTitle"
          aria-describedby="emailHelp"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.title && formik.touched.title && (
          <small className="text-danger">{formik.errors.title}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="bookDesc" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="bookDesc"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.description && formik.touched.description && (
          <small className="text-danger">{formik.errors.description}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => navigate("..")}
      >
        Cancel
      </button>
    </form>
  );
};
