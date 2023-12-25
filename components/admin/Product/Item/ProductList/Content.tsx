import React from "react";
import ListProduct from "./List";
import ListProductReport from "./Report";

const ListProductContent = () => {
  return (
    <div className="p-4 grid grid-cols-6 gap-4 items-center">
      <div className="col-span-4">
        <ListProduct />
      </div>
      <div className="col-span-2">
        <ListProductReport />
      </div>
    </div>
  );
};

export default ListProductContent;
