import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../context/productApi";
import { FaTrashAlt } from "react-icons/fa";

const EditProduct = () => {
  let { data } = useGetProductsQuery();
  let [deleteProduct, {}] = useDeleteProductMutation();
  console.log(deleteProduct);
  const handleDeleteProducts = (id) => {
    if (window.confirm("Are you sure ?")) {
      deleteProduct(id);
    }
  };
  let product = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.image} alt={el.title} />
      <h2>{el.title.substring(0, 31)}</h2>
      <div className="prices">
        <h3>
          <span>${el.oldPrice}</span>${el.price}
        </h3>
        <button
          onClick={() => handleDeleteProducts(el.id)}
          className="btn btn-delete"
        >
          <FaTrashAlt className="trash" />
        </button>
      </div>
    </div>
  ));
  return <div className="edit">{product}</div>;
};

export default EditProduct;
