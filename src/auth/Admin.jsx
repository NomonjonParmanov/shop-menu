import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink, Route, Routes } from "react-router-dom";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import CreateProduct from "../components/createProducts/CreateProduct";
import EditProduct from "../components/editProducts/EditProduct";
import CreateCategory from "../components/createCategory/CreateCategory";
import EditCategory from "../components/editCategory/EditCategory";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="createProduct" element={<CreateProduct />} />
        <Route path="manageProduct" element={<EditProduct />} />
        <Route path="createCategory" element={<CreateCategory />} />
        <Route path="manageCategory" element={<EditCategory />} />
      </Routes>{" "}
      <div className="dashboard">
        <h1>
          <NavLink to={"/"}>
            <FaArrowLeft className="icon" />
          </NavLink>
          Admin Dashboard
        </h1>
        <h2>
          <NavLink to={"/admin/createProduct"}>
            <RiDashboardHorizontalLine className="icon" />
            Create product
          </NavLink>
        </h2>{" "}
        <h2>
          <NavLink to={"/admin/manageProduct"}>
            <CiEdit className="icon" />
            Manage product
          </NavLink>
        </h2>{" "}
        <h2>
          <NavLink to={"/admin/createCategory"}>
            <RiDashboardHorizontalLine className="icon" />
            Create category
          </NavLink>
        </h2>{" "}
        <h2>
          <NavLink to={"/admin/manageCategory"}>
            <CiEdit className="icon" />
            Manage category
          </NavLink>
        </h2>
      </div>
    </>
  );
};

export default Admin;
