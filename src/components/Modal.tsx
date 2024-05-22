interface ModalProp {
  open: boolean;
  setOpen: any;
  children: React.ReactNode;
  closeModal: () => void;
}
export const Modal: React.FC<ModalProp> = ({ open, children, closeModal }) => {
  //
  return (
    <div
      className={`${
        !open ? "scale0  overflow-hidden" : ""
      } relative z-[50] w-[100%] h-[100%]`}
    >
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] z-[1] cursor-pointer"
        onClick={() => {
          closeModal();
        }}
      ></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center z-[2]">
        <div className="z-[2]">{children}</div>
      </div>
    </div>
  );
};
