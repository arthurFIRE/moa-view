import React, { useRef } from "react";
import Popup from "./Popup";

interface MilkPopup {
  callback: (amount?: number) => void;
}

const MilkPopup: React.FC<MilkPopup> = ({ callback }: MilkPopup) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    console.log(
      "Number(inputRef?.current.value)",
      Number(inputRef?.current?.value)
    );
    callback(
      inputRef?.current?.value ? Number(inputRef?.current?.value) : undefined
    );
  };
  return (
    <Popup>
      <div>
        <div>
          <input ref={inputRef} type="number" /> ml
          <button
            type="button"
            style={{ marginLeft: 10 }}
            onClick={() => onClickHandler()}
          >
            Save
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default MilkPopup;
