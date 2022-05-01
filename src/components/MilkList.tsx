import moment from "moment";
import React, { useState } from "react";
import MilkPopup from "./MilkPopup";

const MilkList: React.FC = () => {
  const [milkPopup, setMilkPopup] = useState<React.ReactNode | undefined>();

  const milkString = localStorage.getItem("milk");
  const [milkList, setMilkList] = useState<Array<string>>(
    JSON.parse(milkString || "[]")
  );

  const addMilk = () => {
    const newMilkList = [new Date().toISOString(), ...milkList];
    setMilk(newMilkList);
  };

  const resetMilk = () => {
    const newMilkList: Array<string> = [];
    setMilk(newMilkList);
  };

  const setMilk = (newMilkList: Array<string>) => {
    setMilkList(newMilkList);
    localStorage.setItem("milk", JSON.stringify(newMilkList));
  };

  function openMilkPopup(idx: number) {
    console.log("idx ", idx);
    setMilkPopup(<MilkPopup />);
  }

  return (
    <div>
      {milkPopup}
      <div>
        <h3 style={{ float: "left", marginLeft: 15 }}>* 분유</h3>
        <div style={{ float: "right", marginRight: 15, marginTop: 18 }}>
          <button
            type="button"
            style={{ width: 100 }}
            onClick={() => {
              addMilk();
            }}
          >
            시작
          </button>
          <button
            type="button"
            style={{ marginLeft: 10, width: 100 }}
            onClick={() => {
              resetMilk();
            }}
          >
            리셋
          </button>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        <ul>
          {milkList.map((milk, idx) => (
            <li key={idx} onClick={() => openMilkPopup(idx)}>
              {moment(milk).format("YYYY-MM-DD HH:mm")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilkList;
