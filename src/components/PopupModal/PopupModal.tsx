import React, { ReactElement } from "react";
import "./PopupModal.css";

interface PopupModalProps {}

const MonthName: React.FC<PopupModalProps> = ({}): ReactElement => {
  return (
    <div className="popup-modal-container">
      <div className="popup-modal"></div>
    </div>
  );
};

export default MonthName;
