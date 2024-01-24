import React from "react";
import ListProductReport from "./ProductList/Report";
import ListProduct from "./ProductList/List/List";

const AdminProductList = ({ Category }: any) => {
  return (
    <>
      <div className="flex flex-col">
        {/* <ListProductReport /> */}
        <ListProduct Category={Category} />
      </div>
    </>
  );
};

export default AdminProductList;
