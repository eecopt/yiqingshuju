//饼形图模块    使用立刻执行函数防止变量污染
(function() {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  //2.指定配置选项 和数据
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: 10,
      data: ["one", "two", "three", "four", "five"]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 335, name: "one" },
          { value: 310, name: "two" },
          { value: 234, name: "three" },
          { value: 135, name: "four" },
          { value: 1548, name: "five" }
        ]
      }
    ]
  };

  //3.把配置选项给 实例对象
  myChart.setOption(option);
})();
