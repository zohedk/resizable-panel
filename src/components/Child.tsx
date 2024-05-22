import React, { useState } from "react";
import { ResponseData } from "../lib/types";
import { AddAndUpdateModalContainer } from "./AddAndUpdateModal";
import { useGetCount } from "../hooks/child-hooks";

export const Child: React.FC<{
  childName: string;
  data: ResponseData<"child-data"> | undefined;
}> = ({ data, childName }) => {
  //
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  // old value and Id of element for updation
  const [updateOldValue, setUpdateOldValue] = useState("");
  const [elementId, setElementId] = useState(0);

  // get count query
  const { countData, getCountQuery } = useGetCount();
  //
  return (
    <div className="relative w-[100%] h-[100%] flex flex-col justify-center items-center gap-[30px] ">
      <h1 className="text-[20px] font-bold">{childName}</h1>
      {/* modal container */}
      <div
        className={`absolute top-0 left-0 ${
          openAdd || openUpdate ? "w-[100%] h-[100%]" : ""
        }`}
      >
        <AddAndUpdateModalContainer
          {...{
            childName,
            openAdd,
            setOpenAdd,
            openUpdate,
            setOpenUpdate,
            updateOldValue,
            elementId,
          }}
        />
      </div>
      <div className="flex gap-[10px]">
        {data?.data
          .filter((data) => data.childName === childName)
          .map((data) => {
            return (
              <div key={childName} className="flex  items-center gap-[5px]">
                <div className="font-bold">{data.data}</div>
                <button
                  className=" bg-green-700 hover:bg-green-600 text-white px-[5px] py-[2px] rounded-md"
                  onClick={() => {
                    setOpenUpdate(true);
                    setUpdateOldValue(data.data);
                    setElementId(data.id);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
      </div>
      <div className="flexf lex-col  ">
        <div>Number of time user have called add of update</div>
        <div>
          {`number of time user called add data :`}{" "}
          <span>{countData?.data?.addDataCount}</span>
        </div>
        <div>
          {`number of time user called update data :`}{" "}
          <span>{countData?.data?.updateDataCount}</span>
        </div>
      </div>
      {/* add and refetch could btn */}
      <div className="flex gap-[20px]">
        <button
          className=" bg-cyan-700 hover:bg-cyan-600 text-white px-[5px] py-[2px] rounded-md"
          onClick={() => {
            setOpenAdd(true);
          }}
        >
          Add
        </button>
        <button
          className=" bg-orange-700 hover:bg-orange-500 text-white px-[5px] py-[2px] rounded-md"
          onClick={() => {
            getCountQuery.refetch();
          }}
        >
          Refetch Count
        </button>
      </div>
    </div>
  );
};
