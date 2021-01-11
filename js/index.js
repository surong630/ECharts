// 柱状图模块
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'));
  // 2.指定配置项
  var option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改刻度标签 相关样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            // 不显示x坐标轴得样式
            axisLine: {
              show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            // y轴文字标签样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            },
            // y轴改变了线得样式
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            // y轴分割线得颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              barBorderRadius: 5
            }
        }
    ]
};
// 3.把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图标跟随屏幕自动去适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
// 柱状图2模块
(function() {
  var myColor = ['#8871E6','#FEB555','#68C4F0','#FA807C','pink']
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  option = {
    grid: {
        top: '10%',
        left: '22%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
        show:false,
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: [
      {
      type: 'category',
      data: ['HTML5', 'CSS3', 'javascript', 'vue', 'node'],
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff"
      }
    },
    {
      data: [664,793,610,350,702],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff"
      }
    },
  ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                return myColor[params.dataIndex]
              }
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            // 柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              // {c}会自动的解析为数据 data里面的数据
              formatter: "{c}%",
              color: "#fff"
            }

        },
        {
            name: '框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            yAxisIndex: 1,
            barCategoryGap: 50,
            // 柱子的宽度
            barWidth: 15,
            itemStyle: {
              barBorderRadius: 15,
              color: "none",
              borderWidth: 3,
              borderColor: "#00c1de"
        }
      }
    ]
};
  myChart.setOption(option);
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
// 折线图1模块制作
(function () {
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
           [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
           [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
           [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
       [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
   ];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"))
  // 2.指定配置
  option = {
    color: ["#00f2f1","#ed3f35"],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
          color: '#4c9bfd'
        },
        right: '10%'
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true,
        borderColor: '#012f4a'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#4c9bfd'
        },
        axisLine: {
          show: false
        },
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#4c9bfd'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        }
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            smooth: true,
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
        },
        {
            name: '新增游客',
            type: 'line',
            smooth: true,
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        }
    ]
};
  // 3.把配置给示例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
  // 5.点击切换效果
  $('.line h2').on('click', 'a', function () {
    // 点击a之后 根据当前a的索引号 找到对应的yearData的相关对象
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    myChart.setOption(option);
  })
})();
// 折线图2模块制作
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'))
  option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        top: "0%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12px"
        }
    },
    grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            // 更改文本颜色,大小
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
             // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210],
            color: 'red'
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
  myChart.setOption(option)
})()