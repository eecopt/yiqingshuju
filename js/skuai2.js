// 柱形图模块   使用立即执行函数防止变量污染
(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置选项 和数据
  var charts = {
    unit: "Kbps",
    names: ["新增境外输入", "总新增确诊"],
    lineX: [
      "3.2 ",
      "3.21 ",
      "4.9 ",
      "4.28 ",
      "5.17 ",
      "6.5 ",
      "6.24 ",
      "7.13 ",
      "8.1 ",
      "8.20 ",
      "9.8 ",
      "9.27 ",
      "10.16 ",
      "11.4 ",
      "11.23 ",
      "12.12 ",
      "12.31 ",
      "1.19 "
    ],
    value: [
      [0, 0, 0, 0, 98, 0, 0, 0, 0, 0, 47, 25, 21, 4, 1, 5, 2, 3, 20, 13],
      [
        399,
        649,
        416,
        517,
        411,
        440,
        329,
        430,
        579,
        206,
        352,
        276,
        29,
        104,
        112,
        82,
        90,
        179,
        169,
        232
      ]
    ]
  };
  var color = ["rgba(23, 255, 243", "rgba(255,100,97"];
  var lineY = [];

  for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
      x = color.length - 1;
    }
    var data = {
      name: charts.names[i],
      type: "line",
      color: color[x] + ")",
      smooth: true,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: color[x] + ", 0.3)"
              },
              {
                offset: 0.8,
                color: color[x] + ", 0)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10
        }
      },
      symbol: "circle",
      symbolSize: 5,
      data: charts.value[i]
    };
    lineY.push(data);
  }

  lineY[0].markLine = {
    silent: true,
    data: [
      {
        yAxis: 5
      },
      {
        yAxis: 100
      },
      {
        yAxis: 200
      },
      {
        yAxis: 300
      },
      {
        yAxis: 400
      }
    ]
  };
  var option = {
    // backgroundColor: "#1b2735",
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: charts.names,
      textStyle: {
        fontSize: 12,
        color: "rgb(0,253,255,0.6)"
      },
      right: "4%"
    },
    grid: {
      top: "14%",
      left: "4%",
      right: "4%",
      bottom: "12%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: charts.lineX,
      axisLabel: {
        textStyle: {
          color: "rgb(0,253,255,0.6)"
        },
        formatter: function(params) {
          return params.split(" ")[0] + "\n" + params.split(" ")[1];
        }
      }
    },
    yAxis: {
      name: charts.unit,
      type: "value",
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "rgb(0,253,255,0.6)"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgb(23,255,243,0.3)"
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgb(0,253,255,0.6)"
        }
      }
    },
    series: lineY
  };
  setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          出口: false,
          入口: false
        }
      }
    });
    myChart.setOption({
      legend: {
        selected: {
          出口: true,
          入口: true
        }
      }
    });
  }, 10000);
  // 3.把配置选项给 实例对象
  myChart.setOption(option);
})();
