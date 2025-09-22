(function () {
  "use strict";

  /* Bitcoin Chart */
  const spark1 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
          65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(255, 103, 87)"],
  };
  const spark1chart = new ApexCharts(document.querySelector("#btc-chart"), spark1);
  if(spark1chart) spark1chart.render();

  /* Etherium Chart */
  const spark2 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark2chart = new ApexCharts(document.querySelector("#eth-chart"), spark2);
  if(spark2chart) spark2chart.render();

  /* Golem Chart */
  const spark3 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark3chart = new ApexCharts(document.querySelector("#glm-chart"), spark3);
  if(spark3chart) spark3chart.render();

  /* Dash Chart */
  const spark4 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark4chart = new ApexCharts(document.querySelector("#dash-chart"), spark4);
  if(spark4chart) spark4chart.render();

  /* Litecoin Chart */
  const spark5 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(255, 103, 87)"],
  };
  const spark5chart = new ApexCharts(document.querySelector("#lite-chart"), spark5);
  if(spark5chart) spark5chart.render();

  /* Ripple Chart */
  const spark6 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark6chart = new ApexCharts(document.querySelector("#ripple-chart"), spark6);
  if(spark6chart) spark6chart.render();

  /* Eos Chart */
  const spark7 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark7chart = new ApexCharts(document.querySelector("#eos-chart"), spark7);
  if(spark7chart) spark7chart.render();

  /* Bytecoin Chart */
  const spark8 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(255, 103, 87)"],
  };
  const spark8chart = new ApexCharts(document.querySelector("#bytecoin-chart"), spark8);
  if(spark8chart) spark8chart.render();

  /* IOTA Chart */
  const spark9 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(255, 103, 87)"],
  };
  const spark9chart = new ApexCharts(document.querySelector("#iota-chart"), spark9);
  if(spark9chart) spark9chart.render();

  /* Monero Chart */
  const spark10 = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(50, 212, 132)"],
  };
  const spark10chart = new ApexCharts(document.querySelector("#monero-chart"), spark10);
  if(spark10chart) spark10chart.render();

  /* Start:: Main cards charts */
  const Mainspark1 = {
    chart: {
      type: 'bar',
      height: 40,
      width: 150,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false
      }
    },
    series: [{
      name: 'Value',
      data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    plotOptions: {
        bar: {
            columnWidth: "75%",
            borderRadius: 1
        }
    },
    colors: ['rgb(50, 212, 132)'],

  }
  const Mainspark1chart = new ApexCharts(document.querySelector("#bitcoin-chart"), Mainspark1);
  if(Mainspark1chart) Mainspark1chart.render();

  const Mainspark2 = {
    chart: {
      type: 'bar',
      height: 40,
      width: 150,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false
      }
    },
    series: [{
      name: 'Value',
      data: [51, 35, 41, 35, 27, 93, 53, 30, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    plotOptions: {
        bar: {
            columnWidth: "75%",
            borderRadius: 1
        }
    },
    colors: ['rgb(50, 212, 132)'],

  }
  const Mainspark2chart = new ApexCharts(document.querySelector("#etherium-chart"), Mainspark2);
  if(Mainspark2chart) Mainspark2chart.render();

  const Mainspark3 = {
    chart: {
      type: 'bar',
      height: 40,
      width: 150,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false
      }
    },
    series: [{
      name: 'Value',
      data: [39, 62, 51, 35, 41, 50, 45, 54, 38, 56, 24, 65, 31, 37, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    plotOptions: {
        bar: {
            columnWidth: "75%",
            borderRadius: 1
        }
    },
    colors: ['rgb(255, 103, 87)'],

  }
  const Mainspark3chart = new ApexCharts(document.querySelector("#dashcoin-chart"), Mainspark3);
  if(Mainspark3chart) Mainspark3chart.render();
  /* End:: Main cards charts */

})();
