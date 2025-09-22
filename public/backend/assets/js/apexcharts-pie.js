"use strict";

/* basic pie chart */
const basicoptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    height: 295,
    type: "pie",
  },
  colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
  },
};
const basicchart = new ApexCharts(document.querySelector("#pie-basic"), basicoptions);
if(basicchart) basicchart.render();

/* simple donut chart */
const simpleoptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
    height: 290,
  },
  legend: {
    position: "bottom",
  },
  colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
  },
};
const simplechart = new ApexCharts(document.querySelector("#donut-simple"), simpleoptions);
if(simplechart) simplechart.render();


/* monochrome pie chart */
const monochromeoptions = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
    height: "310",
    type: "pie",
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true,
      color: "#985ffd",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  title: {
    text: "Monochrome Pie",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
    dropShadow: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
};
const monochromechart = new ApexCharts(document.querySelector("#pie-monochrome"), monochromeoptions);
if(monochromechart) monochromechart.render();

/* graidnet donut chart */
const gradientoptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    height: 300,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    position: "bottom",
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
  title: {
    text: "Gradient Donut with custom Start-angle",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
};
const gradientchart = new ApexCharts(document.querySelector("#donut-gradient"), gradientoptions);
if(gradientchart) gradientchart.render();

/* patterned donut chart */
const patternedoptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    height:300,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  colors: ["#985ffd", "#d77cf7", "#f4a742", "#0ca3e7", "#fe5454"],
  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#111"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      borderWidth: 0,
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  title: {
    text: "Favourite Movie Type",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
const patternedchart = new ApexCharts(document.querySelector("#donut-pattern"), patternedoptions);
if(patternedchart) patternedchart.render();

/* pie chart with image fill */
const pieoptions = {
  series: [44, 33, 54, 45],
  chart: {
    height: 300,
    type: "pie",
  },
  colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
  fill: {
    type: "image",
    opacity: 0.85,
    image: {
      src: [
        "../assets/images/media/media-21.jpg",
        "../assets/images/media/media-21.jpg",
        "../assets/images/media/media-21.jpg",
        "../assets/images/media/media-21.jpg",
      ],
      width: 25,
      imagedHeight: 25,
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#111"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      borderWidth: 0,
    },
  },
  legend: {
    position: "bottom",
  },
};
const piechart = new ApexCharts(document.querySelector("#pie-image"), pieoptions);
if(piechart) piechart.render();

/* updating donut chart */
const donutoptions = {
    series: [44, 55, 13, 33],
    chart: {
    width: 300,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 260
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: true,
    position: 'bottom',
  }
};
const donutchart = new ApexCharts(document.querySelector("#donut-update"), donutoptions);
if(donutchart) donutchart.render();
if(donutchart){

  function appendData() {
    const arr = donutchart.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
  }
  
  function removeData() {
    const arr = donutchart.w.globals.series.slice()
    arr.pop()
    return arr;
  }
  
  function randomize() {
    return donutchart.w.globals.series.map(function() {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    })
  }
  
  function reset() {
    return donutoptions.series
  }

  let randomizeDonut = document.querySelector("#randomize");
  let AddDonut = document.querySelector("#add");
  let RemoveDonut = document.querySelector("#remove");
  let ResetDonut = document.querySelector("#reset");
  
  if (randomizeDonut) {
    randomizeDonut.addEventListener("click", function() {
      donutchart.updateSeries(randomize())
    })
  }
  
  if (AddDonut) {
    AddDonut.addEventListener("click", function() {
      donutchart.updateSeries(appendData())
    })
  }
  
  if (RemoveDonut) {
    RemoveDonut.addEventListener("click", function() {
      donutchart.updateSeries(removeData())
    })
  }
  
  if (ResetDonut) {
    ResetDonut.addEventListener("click", function() {
      donutchart.updateSeries(reset())
    })
  }
  
}