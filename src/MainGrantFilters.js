import React from "react";
import { FiDownload } from "react-icons/fi";
import GrantFilterItem from "./GrantFilterItem";

const MainGrantFilters = () => {
  const data = [
    {
      id: 1,
      pname: "shoes",
    },
    {
      id: 2,
      pname: "shoes 2",
    },
    {
      id: 3,
      pname: "shoes 3",
    },
    {
      id: 4,
      pname: "shoes 4",
    },
  ];
  return (
    <div className="w-[900px] flex justify-between">
      <GrantFilterItem data={data} text={"open"} subtext={"Grant Status"} />
      <GrantFilterItem
        data={data}
        text={"Review Status"}
        subtext={"Revise and Resubmit"}
      />
      <GrantFilterItem
        data={data}
        text={"Payment Status:"}
        subtext={"No Payment Due"}
      />
      <GrantFilterItem
        data={data}
        text={"Ball in Court:"}
        subtext={"Grantee"}
      />
      <div className="w-[72px] h-[60px]  bg-[#1D1D1D] text-white flex p-3 rounded-[10px] justify-center">
        <FiDownload className="text-[18px] block mt-auto mb-auto" />
      </div>
    </div>
  );
};

export default MainGrantFilters;
