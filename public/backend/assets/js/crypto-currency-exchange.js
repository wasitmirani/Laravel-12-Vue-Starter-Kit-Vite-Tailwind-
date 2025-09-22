(function () {
  "use strict";

  const randomizeArray = (arg) => {
    const array = arg.slice(); // Clone the array
    let currentIndex = array.length;
  
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap elements
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  // data for the main cards sparklines
  let sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

  /* BTC Chart */
  const btctotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(152, 95, 253, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const btctotalchart = new ApexCharts(document.querySelector("#btc-currency-chart"),btctotal );
  if(btctotalchart) btctotalchart.render();
  /* BTC Chart */

  /* ETH Chart */
  const ETHtotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(255, 73, 205,0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const ETHtotalchart = new ApexCharts(
    document.querySelector("#eth-currency-chart"),
    ETHtotal
  );
  if(ETHtotalchart) ETHtotalchart.render();
  /* ETH Chart */

  /* Dash Chart */
  const Dashtotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
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
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(253, 175, 34,0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const Dashtotalchart = new ApexCharts(
    document.querySelector("#dash-currency-chart"),
    Dashtotal
  );
  if(Dashtotalchart) Dashtotalchart.render();
  /* Dash Chart */

  /* LTC Chart */
  const LTCtotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      ltcArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(0, 201, 255, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const LTCtotalchart = new ApexCharts(
    document.querySelector("#ltc-currency-chart"),
    LTCtotal
  );
  if(LTCtotalchart) LTCtotalchart.render();
  /* LTC Chart */

  /* XRS Chart */
  const XRStotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      ltcArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(50, 212, 132, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const XRStotalchart = new ApexCharts(
    document.querySelector("#xrs-currency-chart"),
    XRStotal
  );
  if(XRStotalchart) XRStotalchart.render();
  /* XRS Chart */

  /* GLM Chart */
  const GLMtotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      ltcArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(255, 103, 87, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const GLMtotalchart = new ApexCharts(
    document.querySelector("#glm-currency-chart"),
    GLMtotal
  );
  if(GLMtotalchart) GLMtotalchart.render();
  /* GLM Chart */

  /* Monero Chart */
  const Monerototal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      ltcArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(53, 181, 170, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const Monerototalchart = new ApexCharts(
    document.querySelector("#monero-currency-chart"),
    Monerototal
  );
  if(Monerototalchart) Monerototalchart.render();
  /* Monero Chart */

  /* Eos Chart */
  const Eostotal = {
    chart: {
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      ltcArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: randomizeArray(sparklineData)
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
    colors: ["rgba(190, 43, 235, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  const Eostotalchart = new ApexCharts(
    document.querySelector("#eos-currency-chart"),
    Eostotal
  );
  if(Eostotalchart) Eostotalchart.render();
  /* Eos Chart */

})();
