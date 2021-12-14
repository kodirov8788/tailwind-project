import React, { useState } from "react";
const GrantFilterItem = ({ text, subtext, data }) => {
  const [prData, setPrData] = useState();
  return (
    <div className="relative bg-[#F8F8F8] w-[200px] h-[60px] mr-[7px]   p-2 rounded-[10px]">
      <p className="text-[10px] ml-1 text-[#8D8D8D]">{subtext}</p>
      <select
        onChange={(e) => setPrData(e.target.value)}
        className="absolute bg-transparent w-[90%] top-[10%] h-full border-none outline-none"
        name={prData}
      >
        {data.map((item) => (
          <option key={item.id}>{item.pname}</option>
        ))}
      </select>
    </div>
  );
};

export default GrantFilterItem;
