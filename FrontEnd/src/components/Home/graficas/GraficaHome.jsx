import ReactApexChart from "react-apexcharts";

const GraficaHome = () => {
  const chartData = {
    series: [
      {
        name: "Quotes",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Completed Orders",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ],
      },
    },
  };

  return (
    <>
      <div id="chart" className="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default GraficaHome;
