import moment from "moment";
import React, { useState } from "react";
import MilkPopup from "./MilkPopup";

interface Milk {
  startDate: string;
  amount?: number;
}

const MilkList: React.FC = () => {
  const [milkPopup, setMilkPopup] = useState<React.ReactNode | undefined>();

  const milkString = localStorage.getItem("milk");
  const [milkList, setMilkList] = useState<Array<Milk>>(
    JSON.parse(milkString || "[]")
  );

  const addMilk = () => {
    const newMilkList = [{ startDate: new Date().toISOString() }, ...milkList];
    setMilk(newMilkList);
  };

  const resetMilk = () => {
    const newMilkList: Array<Milk> = [];
    setMilk(newMilkList);
  };

  const setMilk = (newMilkList: Array<Milk>) => {
    setMilkList(newMilkList);
    localStorage.setItem("milk", JSON.stringify(newMilkList));
  };

  const saveAmount = (idx: number, amount: number) => {
    console.log("amount : ", amount);
    var newMilkList = milkList.map((milk, index) =>
      index === idx ? { ...milk, amount: amount } : milk
    );

    setMilk(newMilkList);
  };

  function openMilkPopup(idx: number) {
    console.log("idx ", idx);
    setMilkPopup(
      <MilkPopup
        callback={(amount) => {
          setMilkPopup(undefined);
          amount && saveAmount(idx, amount);
        }}
      />
    );
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
              {moment(milk.startDate).format("YYYY-MM-DD HH:mm")} :{" "}
              {milk.amount && `${milk.amount}ml`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilkList;
