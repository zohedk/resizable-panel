import { SetStateAction, useEffect, useState } from "react";
import { useAddData, useUpdateData } from "../../hooks/child-hooks";
import toast from "react-hot-toast";

interface Prop {
  childName: string;
  elementId?: number;
  updateOldValue?: string;
  openUpdate?: boolean;
  setOpenAdd: React.Dispatch<SetStateAction<boolean>>;
  setOpenUpdate: React.Dispatch<SetStateAction<boolean>>;
  type: "add" | "update";
}
export const Form: React.FC<Prop> = ({
  childName,
  elementId,
  type,
  updateOldValue,
  setOpenAdd,
  setOpenUpdate,
  openUpdate,
}) => {
  //
  const [data, setData] = useState("");
  //
  const { addDataMutaion } = useAddData();
  const { updateDataMutaion } = useUpdateData();

  useEffect(() => {
    console.log(updateOldValue);
    if (updateOldValue) {
      setData(updateOldValue);
    }
  }, [openUpdate]);

  const handleClose = () => {
    setOpenAdd(false), setOpenUpdate(false), setData("");
  };

  const handleSubmit = () => {
    if (data.length === 0) {
      return toast.error("data length could not be zero");
    }

    if (type === "add") {
      // closing modal on submit and resi
      addDataMutaion.mutate({
        childName,
        data: data,
      });
    } else {
      updateDataMutaion.mutate({ id: elementId!, data: data });
    }

    handleClose();
  };
  //
  //
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="text-center text-white font-bold">
        {type === "add" ? "Add Data" : "Update Data"}
      </h1>
      <div className={`flex items-center flex-col gap-[5px]`}>
        <input
          type="text"
          value={data}
          placeholder={type === "add" ? "add Data" : ""}
          onChange={(e) => {
            e.preventDefault();
            const value = e.target.value;
            setData(value);
          }}
        />

        <button
          onClick={handleSubmit}
          className="text-[14px] bg-white py-[2px] px-[5px] rounded-md font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
