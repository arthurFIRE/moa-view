import React, { useState } from "react";
import moment from "moment";

const Home: React.FC = () => {
  const birthday = new Date(2021, 6, 23);
  const today = new Date();
  const plusTime = today.getTime() - birthday.getTime();

  const dPlusDay = Math.floor(plusTime / (1000 * 60 * 60 * 24)) + 1;
  const dPlusWeek = Math.floor(plusTime / (1000 * 60 * 60 * 24 * 7));
  const dPlusMonth = Math.floor(plusTime / (1000 * 60 * 60 * 24 * 30));
  const dPlusDayOfWeek = Math.floor(
    (plusTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );

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

  return (
    <div style={{ color: "cadetblue" }}>
      <h2 style={{ marginBottom: 0 }}>아영이 태어난지 {dPlusDay}일</h2>
      <div>
        ({dPlusWeek}주{dPlusDayOfWeek}일, {dPlusMonth}개월)
      </div>
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
      <div style={{ marginTop: 70 }}>
        <ul>
          {milkList.map((milk) => (
            <li>{moment(milk).format("YYYY-MM-DD HH:mm")}</li>
          ))}
        </ul>
      </div>
      <div>
        <img width={300} src="/azero.jpg" />
      </div>
    </div>
  );
};

export default Home;
