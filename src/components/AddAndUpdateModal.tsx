import React, { SetStateAction } from "react";
import { Modal } from "./Modal";
import { Form } from "./forms/Form";

interface Prop {
  openAdd: boolean;
  setOpenAdd: React.Dispatch<SetStateAction<boolean>>;
  openUpdate: boolean;
  setOpenUpdate: React.Dispatch<SetStateAction<boolean>>;
  childName: string;
  updateOldValue?: string;
  elementId: number;
}
// this is a modal which will pop up when you want to add or update data
export const AddAndUpdateModalContainer: React.FC<Prop> = (prop) => {
  return (
    <>
      <div className="w-[100%] h-[100%] absolute top-0 left-0">
        <Modal
          {...{
            open: prop.openAdd,
            setOpen: prop.setOpenAdd,
            closeModal: () => {
              prop.setOpenAdd(false);
            },
          }}
        >
          <Form
            {...{
              setOpenUpdate: prop.setOpenUpdate,
              setOpenAdd: prop.setOpenAdd,
              childName: prop.childName,
              type: "add",
            }}
          />
        </Modal>
      </div>
      <div className="w-[100%] h-[100%] absolute top-0 left-0">
        <Modal
          {...{
            open: prop.openUpdate,
            setOpen: prop.setOpenUpdate,
            closeModal: () => {
              prop.setOpenUpdate(false);
            },
          }}
        >
          <Form
            {...{
              updateOldValue: prop.updateOldValue,
              openUpdate: prop.openUpdate,
              setOpenUpdate: prop.setOpenUpdate,
              setOpenAdd: prop.setOpenAdd,
              childName: prop.childName,
              elementId: prop.elementId,
              type: "update",
            }}
          />
        </Modal>
      </div>
    </>
  );
};
