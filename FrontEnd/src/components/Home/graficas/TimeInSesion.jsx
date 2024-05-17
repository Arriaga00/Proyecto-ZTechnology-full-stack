import { Statistic } from "antd";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60;

const TimeInSesion = () => {
  return (
    <>
      <Countdown
        style={{
          height: "9rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        title="Time in session"
        value={deadline}
      />
    </>
  );
};

export default TimeInSesion;
