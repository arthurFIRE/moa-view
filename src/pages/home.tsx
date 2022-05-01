import React from "react";
import Top from "../components/Top";
import MilkList from "../components/MilkList";
import SleepList from "../components/SleepList";
import "../components/styles.css";

const Home: React.FC = () => {
  return (
    <div style={{ color: "cadetblue" }}>
      <Top />
      <MilkList />
      <SleepList />
      <div>
        <img width={300} src="/azero.jpg" alt="azero" />
      </div>
    </div>
  );
};

export default Home;
