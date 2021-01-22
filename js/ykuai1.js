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
      data: ["石家庄", "廊坊", "邢台"]
    },
    series: [
      {
        name: "感染人数",
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
            fontWeight: "bold",
            color: "rgba(255,255,255,.6)"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 786, name: "石家庄" },
          { value: 1, name: "廊坊" },
          { value: 55, name: "邢台" }
        ]
      }
    ]
  };

  //3.把配置选项给 实例对象
  myChart.setOption(option);
})();
