<template>
  <div style="width: auto;height: 1000px"
       id="author">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: "echarts",
  props: {
    data: [],
    links: []
  },
  data () {
    return {}
  },
  mounted () {
    this.echartsInit()
  },
  methods: {
    echartsInit () {
      const option = {
        title: {
          text: "",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        legend: {
          x: "center",
          show: false,
          data: ["夫妻", "战友", "亲戚"],
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "合作",
                itemStyle: {
                  normal: {
                    color: "#009800",
                  },
                },
              },
              {
                name: "合作",
                itemStyle: {
                  normal: {
                    color: "#4592FF",
                  },
                },
              },
              {
                name: "合作",
                itemStyle: {
                  normal: {
                    color: "#3592F",
                  },
                },
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            force: {
              repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                },
                formatter: "{c}",
              },
            },
            data: this.data,
            links: this.links,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
              },
            },
          },
        ],
      };
      echarts.init(document.getElementById('author')).setOption(option)
    }
  }
}
</script>

<style scoped></style>