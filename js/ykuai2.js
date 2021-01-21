(function() {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".pietwo .chart"));
  //2.指定配置选项 和数据
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ["pie", "funnel"]
        },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [30, 110],
        center: ["50%", "50%"],
        roseType: "area",
        data: [
          { value: 10, name: "rose1" },
          { value: 5, name: "rose2" },
          { value: 15, name: "rose3" },
          { value: 25, name: "rose4" },
          { value: 20, name: "rose5" },
          { value: 35, name: "rose6" },
          { value: 30, name: "rose7" },
          { value: 40, name: "rose8" }
        ]
      }
    ]
  };

  //3.把配置选项给 实例对象
  myChart.setOption(option);
})();
