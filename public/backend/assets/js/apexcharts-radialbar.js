(function () {
    "use strict";

    /* basic radialbar chart */
    const basicoptions = {
        series: [70],
        chart: {
            height: 300,
            type: 'radialBar',
        },
        colors: ["#985ffd"],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        labels: ['Cricket'],
    };
    const basicchart = new ApexCharts(document.querySelector("#radialbar-basic"), basicoptions);
    if(basicchart) basicchart.render();

    /* multiple radialbar chart */
    const multipleoptions = {
        series: [44, 55, 67, 83],
        chart: {
            height: 300,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484',],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };
    const multiplechart = new ApexCharts(document.querySelector("#radialbar-multiple"), multipleoptions);
    if(multiplechart) multiplechart.render();

    /* circle chart custom angle */
    const circleoptions = {
        series: [76, 67, 61, 90],
        chart: {
            height: 320,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484',],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
    const circlechart = new ApexCharts(document.querySelector("#circle-custom"), circleoptions);
    if(circlechart) circlechart.render();

    /* gradient circle chart */
    const gradientoptions = {
        series: [75],
        chart: {
            height: 320,
            type: 'radialBar',
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#d77cf7'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Percent'],
    };
    const gradientchart = new ApexCharts(document.querySelector("#gradient-circle"), gradientoptions);
    if(gradientchart) gradientchart.render();

    /* stroked circular gauge */
    const strokedoptions = {
        series: [67],
        chart: {
            height: 320,
            type: 'radialBar',
            offsetY: -10
        },
        colors: ["#985ffd"],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
    };
    const strokedchart = new ApexCharts(document.querySelector("#circular-stroked"), strokedoptions);
    if(strokedchart) strokedchart.render();

    /* circle with image */
    const imageoptions = {
        series: [67],
        chart: {
            height: 330,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '70%',
                    imageWidth: 32,
                    imageHeight: 32,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY:10,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'image',
            image: {
                src: ['../assets/images/media/media-64.jpg'],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Volatility'],
    };
    const imagechart = new ApexCharts(document.querySelector("#circle-image"), imageoptions);
    if(imagechart) imagechart.render();

    /* semi circular gauge */
    const semicircularoptions = {
        series: [76],
        chart: {
            type: 'radialBar',
            height: 320,
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#fff",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: false,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        colors: ["#985ffd"],
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    };
    const semicircularchart = new ApexCharts(document.querySelector("#circular-semi"), semicircularoptions);
    if(semicircularchart) semicircularchart.render();

})();