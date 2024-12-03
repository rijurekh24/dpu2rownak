const chartData = [
  {
    id: "chart7",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
  },
  {
    id: "chart8",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
  },
  {
    id: "chart9",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
  },
  {
    id: "chart10",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
  },
  {
    id: "chart11",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
  },
  {
    id: "chart12",
    data: [9.4, 9.25, 9.6],
    colors: ["#228B22", "#228B22", "#B12D2D"],
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
      height: 160,
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

const testData = [
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "299 mg/dl", status: "concerning" },
    nov2022: { value: "304 mg/dl", status: "concerning" },
    march2023: { value: "299 mg/dl", status: "concerning" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "205 mg/dl", status: "good" },
    nov2022: { value: "105 mg/dl", status: "good" },
    march2023: { value: "99 mg/dl", status: "good" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "299 mg/dl", status: "concerning" },
    nov2022: { value: "304 mg/dl", status: "concerning" },
    march2023: { value: "299 mg/dl", status: "concerning" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "205 mg/dl", status: "good" },
    nov2022: { value: "105 mg/dl", status: "good" },
    march2023: { value: "99 mg/dl", status: "good" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "299 mg/dl", status: "concerning" },
    nov2022: { value: "304 mg/dl", status: "concerning" },
    march2023: { value: "299 mg/dl", status: "concerning" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "205 mg/dl", status: "good" },
    nov2022: { value: "105 mg/dl", status: "good" },
    march2023: { value: "99 mg/dl", status: "good" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "299 mg/dl", status: "concerning" },
    nov2022: { value: "304 mg/dl", status: "concerning" },
    march2023: { value: "299 mg/dl", status: "concerning" },
  },
  {
    testName: "Cholesterol-Total, Serum",
    normalRange: "0-200",
    april2022: { value: "205 mg/dl", status: "good" },
    nov2022: { value: "105 mg/dl", status: "good" },
    march2023: { value: "99 mg/dl", status: "good" },
  },
];

function renderTable(data) {
  const tableContainer = document.getElementById("tableContainer");

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  thead.innerHTML = `
                <tr>
                    <th>Test Name</th>
                    <th>Normal Range</th>
                    <th>April 2022<br><small>Previous Test</small></th>
                    <th>Nov 2022<br><small>Previous Test</small></th>
                    <th>March 2023<br><small>Latest Test</small></th>
                </tr>
            `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
                    <td>${item.testName}</td>
                    <td>${item.normalRange}</td>
                    <td style="color: ${
                      item.april2022.status === "concerning"
                        ? "#b02b2b"
                        : "#228b22"
                    };">${item.april2022.value}</td>
                    <td style="color: ${
                      item.nov2022.status === "concerning"
                        ? "#b02b2b"
                        : "#228b22"
                    };">${item.nov2022.value}</td>
                    <td>
                        <span class="${item.march2023.status}">${
      item.march2023.value
    }<br><small>${
      item.march2023.status === "concerning" ? "Concerning" : "Looks Good"
    }</small></span>
                    </td>
                `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

renderTable(testData);
