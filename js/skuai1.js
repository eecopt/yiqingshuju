//饼形图模块二  使用立刻执行函数防止变量污染
(function() {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".bartwo .chart"));
  //2.指定配置选项 和数据
  var salvProName = [
    "河北",
    "香港",
    "黑龙江",
    "吉林",
    "台湾",
    "上海",
    "北京",
    "广东",
    "陕西",
    "天津"
  ];
  var salvProValue = [844, 812, 306, 185, 100, 97, 47, 41, 26, 23];
  var salvProMax = []; //背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
  }
  option = {
    backgroundColor: "#003366",
    grid: {
      left: "2%",
      right: "2%",
      bottom: "2%",
      top: "2%",
      containLabel: true
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none"
      },
      formatter: function(params) {
        return params[0].name + " : " + params[0].value;
      }
    },
    xAxis: {
      show: false,
      type: "value"
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff"
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: salvProName
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          textStyle: {
            color: "#ffffff",
            fontSize: "12"
          }
        },
        data: salvProValue
      }
    ],
    series: [
      {
        name: "确诊人数",
        type: "bar",
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgb(57,89,255,1)"
              },
              {
                offset: 1,
                color: "rgb(46,200,207,1)"
              }
            ])
          }
        },
        barWidth: "70%",
        data: salvProValue
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 20,
        barGap: "-100%",
        data: salvProMax,
        itemStyle: {
          normal: {
            color: "rgba(24,31,68,1)",
            barBorderRadius: 30
          }
        }
      }
    ]
  };
  //3.把配置选项给 实例对象
  myChart.setOption(option);
})();
