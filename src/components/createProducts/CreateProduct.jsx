import React, { useRef } from "react";
import { useCreateProductMutation } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  let [createProduct, { data, error, isError, isSuccess }] =
    useCreateProductMutation();
  let { data: categories } = useGetCategoryQuery();

  let price = useRef("");
  let decs = useRef("");
  let image = useRef("");
  let title = useRef("");
  let category = useRef("");

  let handleCreateProduct = (e) => {
    e.preventDefault();

    let Product = {
      createdAt: 15,
      price: price.current.value,
      title: title.current.value,
      oldPrice: 50,
      decs: decs.current.value,
      image: image.current.value,
      category: category.current.value,
      quantity: 1,
    };

    createProduct(Product).then((response) => {
      if (response?.data) {
        price.current.value = "";
        decs.current.value = "";
        image.current.value = "";
        title.current.value = "";
        category.current.value = "";
        toast.success("Product created successfully!");
      } else if (response?.error) {
        toast.error("Failed to create product. Please try again.");
      }
    });
  };

  let cards = categories?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));

  return (
    <div className="create">
      <h1>Create product</h1>
      <form onSubmit={handleCreateProduct} action="">
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="title" required ref={title} />

        <label htmlFor="price">Price</label>
        <input type="text" placeholder="Price" required ref={price} />

        <label htmlFor="image">Image-url</label>
        <input type="text" placeholder="Image-url" required ref={image} />

        <label htmlFor="category">Category</label>
        <select required ref={category}>
          {cards}
        </select>

        <label htmlFor="decs">Desc</label>
        <textarea
          required
          ref={decs}
          cols="30"
          rows="10"
          placeholder="desc"
        ></textarea>

        <button type="submit">Create</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
