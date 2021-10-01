import React from "react";

const Home: React.FC = () => {
  const birthday = new Date(2021, 6, 23);
  const today = new Date();
  const plusTime = today.getTime() - birthday.getTime();

  const dPlusDay = Math.floor(plusTime / (1000 * 60 * 60 * 24)) + 1;
  const dPlusWeek = Math.floor(plusTime / (1000 * 60 * 60 * 24 * 7));
  const dPlusDayOfWeek = Math.floor(
    (plusTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <h2 style={{ color: "cadetblue" }}>
        아영이 태어난지 {dPlusDay}일, {dPlusWeek}주{dPlusDayOfWeek}일
      </h2>
    </div>
  );
};

export default Home;
