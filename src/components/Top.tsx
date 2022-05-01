import React from "react";

const Top: React.FC = () => {
  const birthday = new Date(2021, 6, 23);
  const today = new Date();
  const plusTime = today.getTime() - birthday.getTime();

  const dPlusDay = Math.floor(plusTime / (1000 * 60 * 60 * 24)) + 1;
  const dPlusWeek = Math.floor(plusTime / (1000 * 60 * 60 * 24 * 7));
  const dPlusMonth = Math.floor(plusTime / (1000 * 60 * 60 * 24 * 30));
  const dPlusDayOfWeek = Math.floor(
    (plusTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <h2 style={{ marginBottom: 0 }}>아영이 태어난지 {dPlusDay}일</h2>
      <div>
        ({dPlusWeek}주{dPlusDayOfWeek}일, {dPlusMonth}개월)
      </div>
    </>
  );
};

export default Top;
