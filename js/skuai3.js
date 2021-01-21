//饼形图模块二  使用立刻执行函数防止变量污染
(function() {
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".linetwo .chart"));
  //2.指定配置选项 和数据
  //跳转代码
  //跳转代码
  myChart.on("click", function(params) {
    console.log(params.name);
    window.open(params.data.url);
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
  });

  var colorList = [
    [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ba55d3",
      "#cd5c5c",
      "#ffa500",
      "#40e0d0",
      "#1e90ff",
      "#ff6347",
      "#7b68ee",
      "#d0648a",
      "#ffd700",
      "#6b8e23",
      "#4ea397",
      "#3cb371",
      "#b8860b",
      "#7bd9a5"
    ],
    [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ba55d3",
      "#cd5c5c",
      "#ffa500",
      "#40e0d0",
      "#1e90ff",
      "#ff6347",
      "#7b68ee",
      "#00fa9a",
      "#ffd700",
      "#6b8e23",
      "#ff00ff",
      "#3cb371",
      "#b8860b",
      "#30e0e0"
    ],
    [
      "#929fff",
      "#9de0ff",
      "#ffa897",
      "#af87fe",
      "#7dc3fe",
      "#bb60b2",
      "#433e7c",
      "#f47a75",
      "#009db2",
      "#024b51",
      "#0780cf",
      "#765005",
      "#e75840",
      "#26ccd8",
      "#3685fe",
      "#9977ef",
      "#f5616f",
      "#f7b13f",
      "#f9e264",
      "#50c48f"
    ]
  ][2];

  option = {
    // 图表标题
    title: {
      show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
      //   text: '"新时代"主题图谱', //主标题文本，'\n'指定换行
      x: "center", // 水平安放位置，默认为左对齐，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      y: "bottom", // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc", // 标题边框颜色
      borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
      padding: 0, // 标题内边距，单位px，默认各方向内边距为5，
      // 接受数组分别设定上右下左边距，同css
      itemGap: -50, // 主副标题纵向间隔，单位px，默认为10，
      textStyle: {
        fontSize: 16,
        fontWeight: "bolder",
        color: "#333" // 主标题文字颜色
      },
      subtextStyle: {
        color: "#aaa" // 副标题文字颜色
      }
    },
    // backgroundColor: "#fff",
    tooltip: {},
    animationDurationUpdate: function(idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: "bounceIn",
    color: ["#fff", "#fff", "#fff"],
    series: [
      {
        type: "graph",
        layout: "force",
        force: {
          repulsion: 500,
          edgeLength: 10
        },
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        data: [
          {
            name: "无症状感染者为什么增多了",
            value: 2373,
            symbolSize: 48,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[0],
                color: colorList[0]
              }
            },
            url:
              "https://baijiahao.baidu.com/s?id=1689186116878758870&wfr=spider&for=pc"
          },
          {
            name: "北京新增3名本土感染者，最小感染者9岁",
            value: 5449,
            symbolSize: 73,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[1],
                color: colorList[1]
              }
            },
            url: "https://baijiahao.baidu.com/s?id=1689485742659016326"
          },
          {
            name: "石家庄核酸检测一线，有支“白求恩医疗队",
            value: 2289,
            symbolSize: 67,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[2],
                color: colorList[2]
              }
            },
            url: "https://baijiahao.baidu.com/s?id=1689194172623555189"
          },
          {
            name: "上海新增3例本土确诊病例，详情公布",
            value: 2518,
            symbolSize: 50,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[3],
                color: colorList[3]
              }
            },
            url:
              "https://baijiahao.baidu.com/s?id=1689475942253718657&wfr=spider&for=pc"
          },
          {
            name: "黑龙江望奎县升为高风险",
            value: 4730,
            symbolSize: 88,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[4],
                color: colorList[4]
              }
            },
            url:
              "https://baijiahao.baidu.com/s?id=1689361531703224905&wfr=spider&for=pc"
          },
          {
            name: "专家：口罩拉到下巴增加传染风险！别戴透明口罩",
            value: 1952,
            symbolSize: 55,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[5],
                color: colorList[5]
              }
            },
            url:
              "https://baijiahao.baidu.com/s?id=1688736738900435893&wfr=spider&for=pc"
          },
          {
            name: "返乡人员如何划定？国家卫生健康委权威回应",
            value: 926,
            symbolSize: 70,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[6],
                color: colorList[6]
              }
            },
            url:
              "https://baijiahao.baidu.com/s?id=1689421705637698127&wfr=spider&for=pc"
          },
          {
            name: "口罩不能摘！",
            value: 4536,
            symbolSize: 67,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[7],
                color: colorList[7]
              }
            },
            url:
              "https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9474193836211072074%22%7D&n_type=-1&p_from=-1"
          },
          {
            name: "江苏：有序开展新冠疫苗接种",
            value: 750,
            symbolSize: 47,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[8],
                color: colorList[8]
              }
            },
            url: "http://news.cnhubei.com/tupian/p/13587810.html"
          },
          {
            name: "海南一女子造谣牛肉丸检出新冠病毒",
            value: 493,
            symbolSize: 82,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[9],
                color: colorList[9]
              }
            },
            url: "https://www.sohu.com/a/445957363_565502"
          },
          {
            name: "香港新增70宗确诊病例",
            value: 385,
            symbolSize: 59,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[10],
                color: colorList[10]
              }
            },
            url:
              "http://baijiahao.baidu.com/s?id=1689493840301048672&wfr=spider&for=pc"
          },
          {
            name: "河北张北发挥文艺力量助力疫情防控",
            value: 4960,
            symbolSize: 90,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[11],
                color: colorList[11]
              }
            },
            url:
              "http://baijiahao.baidu.com/s?id=1689488002749723877&wfr=spider&for=pc"
          },
          {
            name: "北京世纪坛医院职工全员完成核酸检测",
            value: 8694000,
            symbolSize: 50,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[12],
                color: colorList[12]
              }
            },
            url:
              "http://baijiahao.baidu.com/s?id=1689486706164088220&wfr=spider&for=pc"
          },
          {
            name: "上海单日最大核酸检测量达72.8万份",
            value: 5668,
            symbolSize: 75,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[13],
                color: colorList[13]
              }
            },
            url: "https://m.sohu.com/a/445918562_362042"
          },
          {
            name: "北京首次发现新冠变异毒株",
            value: 339,
            symbolSize: 68,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[14],
                color: colorList[14]
              }
            },
            url: "https://www.sohu.com/a/445893493_247813"
          },
          {
            name: "吉林通化：本次输入性疫情全市累计报告确诊病例123例",
            value: 671,
            symbolSize: 62,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 100,
                shadowColor: colorList[15],
                color: colorList[15]
              }
            },
            url:
              "http://baijiahao.baidu.com/s?id=1689478573679753417&wfr=spider&for=pc"
          }
        ]
      }
    ]
  };
  //3.把配置选项给 实例对象
  myChart.setOption(option);
})();
