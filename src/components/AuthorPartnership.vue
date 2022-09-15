<template>
  <div :id="id">
  </div>
</template>

<script>
// const d3 = require('d3');
import * as d3 from 'd3'
export default {
  props: {
    id: String,
    width: Number,
    height: Number,
    links: Array,
    nodes: Array,
    // edges: Array
  },

  mounted () {
    this.init();
  },
  methods: {

    init () {
      const links = this.links
      const nodes = this.nodes


      // debugger;
      // links.forEach(function (link, index) {
      //     let node = {}
      //     link.source = node[link.source] || (node[link.source] = { name: link.source, id: link.source, relation: link.rela });
      //     link.target = node[link.target] || (node[link.target] = { name: link.target, id: link.target, relation: link.rela });
      //     nodes.push(node)
      // });

      // const nodes = [
      //     { id: "湖南邵阳", group: "头晕" },
      //     { id: "山东莱州", group: "头晕" },
      //     { id: "广东阳江", group: "体征" },
      //     { id: "山东枣庄", group: "部位" },
      //     { id: "泽", group: "头晕" },
      //     { id: "恒", group: "体征" },
      //     { id: "鑫", group: "部位" },
      //     { id: "明山", group: "头晕" },
      //     { id: "班长", group: "体征" }
      // ];
      // const edges = [
      //     { source: "湖南邵阳", target: "山东莱州" },
      //     { source: "山东莱州", target: "广东阳江" },
      //     { source: "山东枣庄", target: "泽" },
      //     { source: "明山", target: "泽" },
      //     { source: "班长", target: "明山" },
      //     { source: "明山", target: "泽" },
      //     { source: "恒", target: "鑫" },
      //     { source: "广东阳江", target: "班长" },
      //     { source: "恒", target: "泽" },
      //     { source: "明山", target: "班长" }
      // ];

      var width = 800,
        height = 600;

      var color = d3.scaleOrdinal(d3.schemeCategory10);

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3
            .forceLink(links)
            .id((d) => d.id)
            .distance(200)
        )
        .force("charge", d3.forceManyBody().strength(-100))
        .force("center", d3.forceCenter(width / 2, height / 2));

      var svg = d3
        .select("#" + this.id)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      let g = svg.append("g");

      svg.call(
        d3
          .zoom()
          .scaleExtent([0.1, 4])
          .on("zoom", () => {
            g.attr("transform", d3.event.transform);
          })
      );
      simulation.nodes(nodes).on("tick", tick);

      console.log(nodes);
      console.log(links);
      //箭头
      var marker = svg
        .append("marker")
        //.attr("id", function(d) { return d; })
        .attr("id", "resolved")
        //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 -5 10 10") //坐标系的区域
        .attr("refX", 32) //箭头坐标
        .attr("refY", -1)
        .attr("markerWidth", 12) //标识的大小
        .attr("markerHeight", 12)
        .attr("orient", "auto") //绘制方向，可设定为：auto（自动确认方向）和 角度值
        .attr("stroke-width", 2) //箭头宽度
        .append("path")
        .attr("d", "M0,-5L10,0L0,5") //箭头的路径
        .attr("fill", "#000000"); //箭头颜色

      //* 将连接线设置为曲线
      // var path = svg.append("g").selectAll("path")
      //     .data(force.links())
      //     .enter().append("path")
      //     .attr("class", function (d) { return "link " + d.type; })
      //     .style("stroke", function (d) {
      //         //console.log(d);
      //         return "#A254A2";//连接线的颜色
      //     })
      //     .attr("marker-end", function (d) { return "url(#" + d.type + ")"; });

      //设置连接线

      var edges_line = svg
        .selectAll(".edgepath")
        .data(links)
        .enter()
        .append("path")
        .style("stroke", function (d) {
          var lineColor;
          //根据关系的不同设置线条颜色
          if (d.rela == "上位产品" || d.rela == "上游" || d.rela == "下位产品") {
            lineColor = "#A254A2";
          } else if (d.rela == "主营产品") {
            lineColor = "#B43232";
          }
          return lineColor;
        })
        .style("pointer-events", "none")
        .style("stroke-width", 2) //线条粗细
        .attr("marker-end", "url(#resolved)")
        .attr("d", function (d) {
          return (
            "M " +
            d.source.x +
            " " +
            d.source.y +
            " L " +
            d.target.x +
            " " +
            d.target.y
          );
        })
        .attr("class", "edgepath")
        .attr("id", function (d, i) {
          return "edgepath" + i;
        }); //根据箭头标记的id号标记箭头

      // var edges_text = svg.append("g").selectAll(".edgelabel")
      //     .data(links)
      //     .enter()
      //     .append("text")
      //     .style("pointer-events", "none")
      //     .attr("class", "linetext")
      //     .attr('id', function (d, i) { return 'edgepath' + i; })
      //     .attr('class', 'edgelabel')
      //     .attr('dy', 0)
      //     .attr('dx', 80)

      //设置线条上的文字
      // edges_text.append('textPath')
      //     .attr('xlink:href', function (d, i) { return '#edgepath' + i })
      //     .style("pointer-events", "none")
      //     .text(function (d) { return d.rela; });

      //圆圈
      var circle = svg
        .append("g")
        .selectAll("circle")
        .data(nodes) //表示使用force.nodes数据
        .enter()
        .append("circle")
        .style("fill", function (node) {
          var color; //圆圈背景色
          var link = links[node.index];
          if (node.name == link.source.name && link.rela == "主营产品") {
            color = "#F6E8E9";
          } else {
            color = "#F9EBF9";
          }
          return color;
        })
        .style("stroke", function (node) {
          var color; //圆圈线条的颜色
          var link = links[node.index];
          if (node.name == link.source.name && link.rela == "主营产品") {
            color = "#B43232";
          } else {
            color = "#A254A2";
          }
          return color;
        })
        .attr("r", 28) //设置圆圈半径
        .on("click", function (node) {
          //单击时让连接线加粗
          edges_line.style("stroke-width", function (line) {
            console.log(line);
            if (line.source.name == node.name || line.target.name == node.name) {
              return 4;
            } else {
              return 0.5;
            }
          });
          //d3.select(this).style('stroke-width',2);
        })
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        ); //将当前选中的元素传到drag函数中，使顶点可以被拖动

      //拖拽函数
      function dragstarted (d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged (d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended (d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      /*
           circle.append("text")  
          .attr("dy", ".35em")  
          .attr("text-anchor", "middle")//在圆圈内添加文字  
          .text(function(d) { 
              //console.log(d);
              return d.name; 
          }); */

      //圆圈的提示文字
      circle.append("svg:title").text(function (node) {
        var link = links[node.index];
        if (node.name == link.source.name && link.rela == "主营产品") {
          return "双击可查看详情";
        }
      });

      var text = svg
        .append("g")
        .selectAll("text")
        .data(nodes)
        //返回缺失元素的占位对象（placeholder），指向绑定的数据中比选定元素集多出的一部分元素。
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle") //在圆圈中加上数据
        .style("fill", function (node) {
          var color; //文字颜色
          var link = links[node.index];
          if (node.name == link.source.name && link.rela == "主营产品") {
            color = "#B43232";
          } else {
            color = "#A254A2";
          }
          return color;
        })
        .attr("x", function (d) {
          // console.log(d.name+"---"+ d.name.length);
          var re_en = /[a-zA-Z]+/g;
          //如果是全英文，不换行
          if (d.id.match(re_en)) {
            d3.select(this)
              .append("tspan")
              .attr("x", 0)
              .attr("y", 2)
              .text(function () {
                return d.id;
              });
          }
          //如果小于四个字符，不换行
          else if (d.id.length <= 4) {
            d3.select(this)
              .append("tspan")
              .attr("x", 0)
              .attr("y", 2)
              .text(function () {
                return d.id;
              });
          } else {
            var top = d.id.substring(0, 4);
            var bot = d.id.substring(4, d.id.length);

            d3.select(this).text(function () {
              return "";
            });

            d3.select(this)
              .append("tspan")
              .attr("x", 0)
              .attr("y", -7)
              .text(function () {
                return top;
              });

            d3.select(this)
              .append("tspan")
              .attr("x", 0)
              .attr("y", 10)
              .text(function () {
                return bot;
              });
          }
          //直接显示文字
          /*.text(function(d) { 
                  return d.name; */
        });

      function tick () {
        //path.attr("d", linkArc);//连接线
        circle.attr("transform", (d) => {
          return `translate(${d.x},${d.y})`;
        }); //圆圈
        text.attr("transform", (d) => {
          return `translate(${d.x},${d.y})`;
        }); //顶点文字
        //edges_text.attr("transform", transform3);
        //text2.attr("d", linkArc);//连接线文字
        //console.log("text2...................");
        //console.log(text2);
        //edges_line.attr("x1",function(d){ return d.source.x; });
        //edges_line.attr("y1",function(d){ return d.source.y; });
        //edges_line.attr("x2",function(d){ return d.target.x; });
        //edges_line.attr("y2",function(d){ return d.target.y; });

        edges_line.attr("x", function (d) {
          return (d.source.x + d.target.x) / 2;
        });
        edges_line.attr("y", function (d) {
          return (d.source.y + d.target.y) / 2;
        });

        edges_line.attr("d", function (d) {
          var path =
            "M " +
            d.source.x +
            " " +
            d.source.y +
            " L " +
            d.target.x +
            " " +
            d.target.y;
          return path;
        });

        // edges_text.attr('transform', function (d, i) {
        //     if (d.target.x < d.source.x) {
        //         bbox = this.getBBox();
        //         rx = bbox.x + bbox.width / 2;
        //         ry = bbox.y + bbox.height / 2;
        //         return 'rotate(180 ' + rx + ' ' + ry + ')';
        //     }
        //     else {
        //         return 'rotate(0)';
        //     }
        // });
      }

      //设置连接线的坐标,使用椭圆弧路径段双向编码
      function linkArc (d) {
        //var dx = d.target.x - d.source.x,
        // dy = d.target.y - d.source.y,
        // dr = Math.sqrt(dx * dx + dy * dy);
        //return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
        //打点path格式是：Msource.x,source.yArr00,1target.x,target.y

        return (
          "M " +
          d.source.x +
          " " +
          d.source.y +
          " L " +
          d.target.x +
          " " +
          d.target.y
        );
      }
      //设置圆圈和文字的坐标
      // function transform1(d) {
      //     return "translate(" + d.x + "," + d.y + ")";
      // }
      // function transform2(d) {
      //     return "translate(" + (d.x) + "," + d.y + ")";
      // }
    }
  },
  watch: {
    links () {
      this.init();
    },
    nodes () {
      this.init();
    }
  }
}
</script>

<style>
.link {
  fill: none;
  stroke: #666;
  stroke-width: 1.5px;
}

#licensing {
  fill: green;
}

.link.licensing {
  stroke: green;
}

.link.resolved {
  stroke-dasharray: 0, 2 1;
}

circle {
  fill: #ccc;
  stroke: #333;
  stroke-width: 1.5px;
}

text {
  font: 12px Microsoft YaHei;
  pointer-events: none;
  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;
}

.linetext {
  font-size: 12px Microsoft YaHei;
}
</style>