import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface SearchProps {
  Data: any;
  Select: (item: any) => void;
}

const Search = ({ Data, Select }: SearchProps) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);

  useEffect(() => {
    const sort = Data?.filter((SearchRS: any) =>
      SearchRS?.title?.toLowerCase().includes(search.toLowerCase())
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
        <div className="absolute w-full bg-white top-full flex flex-col shadow-inner z-50 mt-2 border border-solid  ">
          <div className=" flex flex-col">
            {searchRs?.slice(0, 5).map((searchItems: any, idx: number) => (
              <div
                key={idx}
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => Select(searchItems.pid)}
              >
                <div className="p-1 flex gap-2">
                  <Image
                    src={searchItems.image}
                    alt={`Search Result #${idx}`}
                    width={70}
                    height={70}
                  />
                  <div>
                    {" "}
                    <div className="text-[#16757c] ">{searchItems.title}</div>
                    <div className="flex items-center gap-2 ">
                      <div className="rounded-md px-3 py-1 bg-gray-200">
                        #{searchItems.pid}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
