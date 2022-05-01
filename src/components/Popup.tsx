import React from "react";

export interface PopupProps {
  children: JSX.Element;
}

const Popup: React.FC<PopupProps> = ({ children }: PopupProps) => {
  return (
    <>
      <div className="popup-content">{children}</div>

      <div className="dim-layer">
        <div className="dimBg"></div>
      </div>
    </>
  );
};

export default Popup;
