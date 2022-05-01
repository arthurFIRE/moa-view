import moment from "moment";
import React, { useState } from "react";

const SleepList: React.FC = () => {
  const sleepString = localStorage.getItem("sleep");
  const [sleepList, setSleepList] = useState<Array<string>>(
    JSON.parse(sleepString || "[]")
  );

  const addSleep = () => {
    const newSleepList = [new Date().toISOString(), ...sleepList];
    setSleep(newSleepList);
  };

  const resetSleep = () => {
    const newSleepList: Array<string> = [];
    setSleep(newSleepList);
  };

  const setSleep = (newSleepList: Array<string>) => {
    setSleepList(newSleepList);
    localStorage.setItem("sleep", JSON.stringify(newSleepList));
  };

  return (
    <div>
      <div>
        <h3 style={{ float: "left", marginLeft: 15 }}>* 수면</h3>
        <div style={{ float: "right", marginRight: 15, marginTop: 18 }}>
          <button
            type="button"
            style={{ width: 100 }}
            onClick={() => {
              addSleep();
            }}
          >
            시작
          </button>
          <button
            type="button"
            style={{ marginLeft: 10, width: 100 }}
            onClick={() => {
              resetSleep();
            }}
          >
            리셋
          </button>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        <ul>
          {sleepList.map((sleepTime, idx) => (
            <li key={idx}>{moment(sleepTime).format("YYYY-MM-DD HH:mm")}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SleepList;
