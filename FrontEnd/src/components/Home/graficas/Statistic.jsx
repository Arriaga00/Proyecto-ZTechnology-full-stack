import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import TimeInSesion from "./TimeInSesion";

const Statistict = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <>
      <article className="StaticSetion">
        <div className="Statistic">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                style={{
                  height: "8.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  minWidth: "15rem",
                }}
                title="Active Users"
                value={112893}
                formatter={formatter}
              />
            </Col>
            <Col span={12}>
              <Statistic
                style={{
                  height: "8rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  minWidth: "15rem",
                }}
                title="Account Balance (CNY)"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </Col>
          </Row>
        </div>
        <div className="TimeInSesion">
          <TimeInSesion />
        </div>
      </article>
    </>
  );
};

export default Statistict;
