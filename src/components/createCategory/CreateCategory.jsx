import React, { useRef } from "react";
import { useCreateCategoryMutation } from "../../context/categoryApi";

const CreateCategory = () => {
  let [
    createCategory,
    {
      isLoading: loadingCreateCategory,
      data: dataCreateCategory,
      isError: isErrorCreateCategory,
      error,
    },
  ] = useCreateCategoryMutation();
  const title = useRef();
  const handleCreateCategory = (e) => {
    e.preventDefault();
    let category = {
      title: title.current.value,
    };
    createCategory(category);
    title.current.value = "";
  };
  return (
    <div className="create__category">
      <form onSubmit={handleCreateCategory}>
        <input ref={title} type="text" placeholder="Create Category" required />
        <button disabled={loadingCreateCategory}>Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
