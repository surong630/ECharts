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
})()