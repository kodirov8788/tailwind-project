import React from "react";
import { BiChevronDown } from "react-icons/bi";
const GrantFilterItem = ({ text, subtext }) => {
  return (
    <div className="w-[200px] h-[60px] mr-[7px] bg-[#F8F8F8] flex p-3 rounded-[10px] justify-between">
      <div>
        <p className="text-[10px] text-[#8D8D8D]">{subtext}</p>
        <h1 className="text-bold-500 text-[14px]">{text}</h1>
      </div>
      <BiChevronDown className="text-[20px]  block mt-auto mb-auto" />
    </div>
  );
};

export default GrantFilterItem;
