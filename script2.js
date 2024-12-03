const chartData = [
  {
    id: "chart7",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#04b697", "#04b697"],
  },
  {
    id: "chart8",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#ff4444", "#04b697"],
  },
  {
    id: "chart9",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#04b697", "#04b697"],
  },
  {
    id: "chart10",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#04b697", "#04b697"],
  },
  {
    id: "chart11",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#04b697", "#04b697"],
  },
  {
    id: "chart12",
    data: [9.4, 9.25, 9.6],
    colors: ["#04b697", "#04b697", "#ff4444"],
  },
];

chartData.forEach((chart) => {
  const chartOptions = {
    series: [
      {
        name: "Calcium Level",
        data: chart.data.map((value, index) => ({
          x: `Category ${index + 1}`,
          y: value,
          fillColor: chart.colors[index],
        })),
      },
    ],
    chart: {
      type: "bar",
      height: 170,
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Apr' 22", "Nov' 22", "Mar' 23"],
    },
    yaxis: {
      min: 8.75,
      max: 9.75,
      tickAmount: 4,
      labels: {
        formatter: (value) => value.toFixed(2),
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
      },
    },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: chart.colors,
  };

  const chartElement = document.querySelector(`#${chart.id}`);
  const renderedChart = new ApexCharts(chartElement, chartOptions);
  renderedChart.render();
});
