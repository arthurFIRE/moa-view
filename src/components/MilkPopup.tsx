import React from "react";
import Popup from "./Popup";

const MilkPopup: React.FC = () => {
  return (
    <Popup>
      <div>
        <div>
          <input type="number" /> ml
          <button type="button" style={{ marginLeft: 10 }}>
            Save
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default MilkPopup;
