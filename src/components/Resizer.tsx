import React from "react";

export const Resizer: React.FC<{ direction: "horizontal" | "vertical" }> = ({
  direction,
}) => {
  return (
    <div
      className={`${
        direction === "horizontal"
          ? "w-[100%] h-[10px]"
          : "w-[10px] h-[100%] z-[50]"
      } bg-black flex  justify-center items-center`}
    >
      <div
        className={`${
          direction === "horizontal"
            ? "w-[150px] h-[4px] rounded-full"
            : "w-[4px] h-[150px] rounded-full"
        } bg-white `}
      ></div>
    </div>
  );
};
