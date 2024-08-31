import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} from "../../context/categoryApi";

const EditCategory = () => {
  let { data } = useGetCategoryQuery();
  let [deleteCategory, {}] = useDeleteCategoryMutation();
  const handleDeleteProducts = (id) => {
    if (window.confirm("Are you sure ?")) {
      deleteCategory(id);
    }
  };
  let category = data?.map((el) => (
    <div className="card" key={el.id}>
      <h2>{el.title}</h2>
      <button
        style={{ backgroundColor: "transparent" }}
        onClick={() => handleDeleteProducts(el.id)}
        className="btn btn-delete"
      >
        <FaTrashAlt className="trash" />
      </button>
    </div>
  ));
  return (
    <div className="edit__category">
      <div className="cards">{category}</div>
    </div>
  );
};

export default EditCategory;
