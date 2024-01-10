import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface SearchProps {
  Data: any;
}

const Search = ({ Data }: SearchProps) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);

  useEffect(() => {
    const sort = Data?.filter((SearchRS: any) =>
      SearchRS.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Data, search]);

  return (
    <div className=" relative bg-white py-3">
      <div className="border rounded-lg ">
        <div className="py-2 px-4 flex items-center gap-2">
          <div className="cursor-pointer">
            <IoSearchSharp />
          </div>
          <input
            type="text"
            className="outline-none"
            placeholder="Tìm kiếm "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <div
              className={`${
                search ? "block" : "hidden"
              }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
              onClick={() => setSearch("")}
            >
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>
      {search && (
        <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
          <div className=" flex flex-col">
            {searchRs.map((product: any, idx: number) => (
              <div key={idx} className="cursor-pointer p-2 hover:bg-gray-100">
                {product.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
