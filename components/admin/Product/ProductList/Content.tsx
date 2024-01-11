import React from "react";

import ListProductReport from "./Report";
import ListProductHistory from "./History/History";
import ListProduct from "./List/List";

const ListProductContent = () => {
  return (
    <div className="p-4 grid grid-cols-6 gap-4 items-center">
      <div className="col-span-6">
        <ListProduct />
      </div>
      {/* <div className="col-span-2">
        <ListProductHistory />
      </div> */}
    </div>
  );
};

export default ListProductContent;
