import React from "react";
import { FiDownload } from "react-icons/fi";
import GrantFilterItem from "./GrantFilterItem";

const MainGrantFilters = () => {
  return (
    <div className="w-[900px] flex justify-between">
      <GrantFilterItem text={"open"} subtext={"Grant Status"} />
      <GrantFilterItem text={"Review Status"} subtext={"Revise and Resubmit"} />
      <GrantFilterItem text={"Payment Status:"} subtext={"No Payment Due"} />
      <GrantFilterItem text={"Ball in Court:"} subtext={"Grantee"} />
      <div className="w-[72px] h-[60px]  bg-[#1D1D1D] text-white flex p-3 rounded-[10px] justify-center">
        <FiDownload className="text-[18px] block mt-auto mb-auto" />
      </div>
    </div>
  );
};

export default MainGrantFilters;
