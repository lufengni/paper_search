<template>
  <div style="width: auto;height: 1000px" id="main">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: "echarts",
  props: {
    // data: [],
    // links: []
  },
  data() {
    return {
      data: [],
      links: []

    }
  },
  mounted() {
    let set = new Set()
    let data = {
      "success": true,
      "code": 200,
      "message": "操作成功",
      "queryData": [
        {
          "id": 44,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 45,
            "paperId": null,
            "publishedYear": null,
            "title": "6"
          }
        },
        {
          "id": 42,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 3,
            "paperId": null,
            "publishedYear": null,
            "title": "3"
          }
        },
        {
          "id": 43,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 44,
            "paperId": null,
            "publishedYear": null,
            "title": "5"
          }
        }
      ]

    }

    data.queryData.map(item => {
      if (!set.has(item.startNode.title)) {

        this.data.push({
          name: item.startNode.title,
          des: item.startNode.title,
        })
        set.add(item.startNode.title)

      }

      if (!set.has(item.endNode.title)) {

        this.data.push({
          name: item.endNode.title,
          des: item.endNode.title,
        })
        set.add(item.endNode.title)

      }

      this.links.push({
        source: item.startNode.title,
        target: item.endNode.title,
        name: '引用'
      })

    })
    this.echartsInit()

  },
  methods: {
    echartsInit() {
      const option = {
        title: {
          text: '论文引用关系'
        },
        tooltip: {
          formatter: function (x) {
            return x.data.des;
          }
        },
        series: [{
          type: 'graph',
          layout: 'force',
          symbolSize: 58,
          roam: true,
          edgeSymbol: ['circle', 'arrow'],
          // edgeSymbolSize: [80, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          force: {
            repulsion: 2500,
            edgeLength: [10, 50]
          },
          draggable: true,
          itemStyle: {
            normal: {
              color: '#4b565b'
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              color: '#4b565b'

            }
          },
          edgeLabel: {
            normal: {
              show: true,
              formatter: function (x) {
                return x.data.name;
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {}
            }
          },
          data: this.data,
          links: this.links
        }]
      };
      echarts.init(document.getElementById('main')).setOption(option)
    }
  }
}
</script>

<style scoped></style>
