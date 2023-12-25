import React from "react";
import ListProductReport from "./Item/ProductList/Report";
import ListProductContent from "./Item/ProductList/Content";

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
