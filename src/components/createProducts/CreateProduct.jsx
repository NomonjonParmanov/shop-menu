import React, { useRef } from "react";
import { useCreateProductMutation } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
const CreateProduct = () => {
  let [createProduct, { data, error, isError, isSuccess }] =
    useCreateProductMutation();
  let { data: categories } = useGetCategoryQuery();
  let price = useRef("");
  let decs = useRef("");
  let image = useRef("");
  let title = useRef([]);
  let category = useRef([]);
  console.log("error", data);
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
    createProduct(Product);
    console.log(Product);
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
        <label htmlFor="">Title</label>
        <input type="text" placeholder="title" required ref={title} />
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Price" required ref={price} />
        <label htmlFor="">Image-url</label>
        <input type="text" placeholder="Image-url" required ref={image} />
        <label htmlFor="">Category</label>
        <select required ref={category}>
          {cards}
        </select>
        <label htmlFor="">Desc</label>
        <textarea
          required
          ref={decs}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="desc"
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
