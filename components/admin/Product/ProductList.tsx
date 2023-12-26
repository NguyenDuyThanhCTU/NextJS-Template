import React from "react";
import ListProductReport from "./ProductList/Report";
import ListProductContent from "./ProductList/Content";

const AdminProductList = () => {
  return (
    <>
      <div className="flex flex-col">
        <ListProductReport />
        <ListProductContent />
      </div>
    </>
  );
};

export default AdminProductList;
