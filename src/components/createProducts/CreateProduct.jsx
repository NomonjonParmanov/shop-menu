import React from "react";

const CreateProduct = () => {
  console.log(10);
  return (
    <div className="create">
      <h1>Create product</h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" placeholder="title" />{" "}
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Price" />{" "}
        <label htmlFor="">Image-url</label>
        <input type="text" placeholder="Image-url" />{" "}
        <label htmlFor="">Category</label>
        <select>
          <option value="">all</option>
        </select>
        <label htmlFor="">Desc</label>
        <textarea
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
