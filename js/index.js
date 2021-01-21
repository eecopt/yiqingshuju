// 柱形图模块   使用立即执行函数防止变量污染
(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置选项 和数据
  var option = {
    //   修改柱子颜色
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // grid决定柱状图大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["吉林", "河北", "黑龙江", "上海", "广东", "四川", "上海"],
        axisTick: {
          alignWithLabel: true
        },
        // X轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // 不显示X轴的线
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // Y轴文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // y轴分割线的颜色
        splitLine: {
          splitLine: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "新增: ",
        type: "bar",
        // 柱子宽度

        barWidth: "35%",
        data: [68, 45, 16, 33, 4, 3, 5],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3.把配置选项给 实例对象
  myChart.setOption(option);
  // 让图标适配屏幕宽度
  window.addEventListener("resize", function() {
    // 让图表调用resize方法
    myChart.resize();
  });
})();
(function() {
  // 1. 实例化
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2.指定配置
  window.dataList = [
    {
      name: "南海诸岛",
      value: 0
    },
    {
      name: "北京",
      value: 54
    },
    {
      name: "天津",
      value: 13
    },
    {
      name: "上海",
      value: 40
    },
    {
      name: "重庆",
      value: 75
    },
    {
      name: "河北",
      value: 13
    },
    {
      name: "河南",
      value: 83
    },
    {
      name: "云南",
      value: 11
    },
    {
      name: "辽宁",
      value: 19
    },
    {
      name: "黑龙江",
      value: 15
    },
    {
      name: "湖南",
      value: 69
    },
    {
      name: "安徽",
      value: 60
    },
    {
      name: "山东",
      value: 39
    },
    {
      name: "新疆",
      value: 4
    },
    {
      name: "江苏",
      value: 31
    },
    {
      name: "浙江",
      value: 104
    },
    {
      name: "江西",
      value: 36
    },
    {
      name: "湖北",
      value: 1052
    },
    {
      name: "广西",
      value: 33
    },
    {
      name: "甘肃",
      value: 7
    },
    {
      name: "山西",
      value: 9
    },
    {
      name: "内蒙古",
      value: 7
    },
    {
      name: "陕西",
      value: 22
    },
    {
      name: "吉林",
      value: 4
    },
    {
      name: "福建",
      value: 18
    },
    {
      name: "贵州",
      value: 5
    },
    {
      name: "广东",
      value: 98
    },
    {
      name: "青海",
      value: 1
    },
    {
      name: "西藏",
      value: 0
    },
    {
      name: "四川",
      value: 44
    },
    {
      name: "宁夏",
      value: 4
    },
    {
      name: "海南",
      value: 22
    },
    {
      name: "台湾",
      value: 3
    },
    {
      name: "香港",
      value: 5
    },
    {
      name: "澳门",
      value: 5
    }
  ];
  option = {
    tooltip: {
      trigger: "item",
      formatter: function(e, t, n) {
        return 0.5 == e.value
          ? e.name + "：有疑似病例"
          : e.seriesName + "<br />" + e.name + "：" + e.value;
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: 26,
      bottom: 40,
      showLabel: !0,
      text: ["高", "低"],
      pieces: [
        {
          gt: 100,
          label: "> 100 人",
          color: "#7f1100"
        },
        {
          gte: 10,
          lte: 100,
          label: "10 - 100 人",
          color: "#ff5428"
        },
        {
          gte: 1,
          lt: 10,
          label: "1 - 9 人",
          color: "#ff8c71"
        },
        {
          gt: 0,
          lt: 1,
          label: "疑似",
          color: "#ffd768"
        },
        {
          value: 0,
          color: "#ffffff"
        }
      ],
      show: !0
    },
    geo: {
      map: "china",
      roam: !1,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 0.5,
      top: 120,
      label: {
        normal: {
          show: !0,
          fontSize: "12",
          color: "rgba(0,0,0,0.7)"
        }
      },
      itemStyle: {
        normal: {
          //shadowBlur: 50,
          //shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          areaColor: "#f2d5ad",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: window.dataList
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
})();
