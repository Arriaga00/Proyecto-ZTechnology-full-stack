import GraficaHome from "../components/Home/graficas/GraficaHome";
import GrafitRadio from "../components/Home/graficas/GrafitRadio";
import Statistict from "../components/Home/graficas/Statistic";

const Home = () => {
  return (
    <>
      <GraficaHome />
      <section className="grafitContainer">
        <GrafitRadio />
        <Statistict />
      </section>
    </>
  );
};

export default Home;
