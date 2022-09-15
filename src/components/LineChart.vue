<template>
  <div class="d3line"
       :id="id">
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  props: {
    id: String,
    width: Number,
    height: Number,
    dataset: Array
  },
  mounted () {
    console.log(this.id);
    this.init();
  },
  methods: {
    init () {
      d3.select("#svg" + this.id).remove();
      let width = this.width ? this.width : 600;
      let height = this.height ? this.height : 600;
      let m = {
        left: 80,
        right: 50,
        top: 50,
        bottom: 50
      }

      let svg = d3.select("#" + this.id).append("svg").attr("width", width).attr("height", height).attr("id", "svg" + this.id);

      let data = this.dataset

      // 创建一个g 当后面元素的group容器，移到（100，30）的位置
      // const m = { top: 30, right: 30, bottom: 30, left: 30 };
      const g = svg.append("g").attr("transform", "translate(30, 30)");
      // 实际我们图的高度宽度
      const gW = width - m.left - m.right;
      const gH = height - m.top - m.bottom;

      const xScale = d3.scaleBand().range([0, gW])
        .domain(data.map(item => item.year));

      g.append("g")
        .attr("transform", `translate(0, ${gH})`)
        .call(d3.axisBottom(xScale))
        .style('font-weight', 'bold')
      // .attr("stroke", "red");

      const yScale = d3.scaleLinear().range([gH, 0]);
      yScale.domain([0, d3.max(data, item => item.value)]);
      g.append("g")
        .call(d3.axisLeft(yScale))
        .style('font-weight', 'bold')
      // .attr("stroke", "red");

      // 先给点画上小圆圈和文字，创建一个文字和圆圈的group
      // join那句可以改为以前v4写法.enter().append('circle')
      const group1 = g
        .selectAll(".gruop-circle-text")
        .data(data)
        .join("g")
        .attr("class", "gruop-circle-text");

      group1
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => {
          return xScale(d.year) + xScale.bandwidth() / 2;
        })
        .attr("cy", d => {
          return yScale(d.value);
        })
        .attr("r", 3)
        .attr("fill", "green");

      group1
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("x", d => {
          return xScale(d.year) + xScale.bandwidth() / 2;
        })
        .attr("y", d => yScale(d.value) - 2)
        .text(d => d.value);
      // 创建一个line的生成器 用d3.line,把所有点连起来
      const line = d3
        .line()
        .x(d => {
          // 这里是d3.scaleBand自带比例尺
          return xScale(d.year) + xScale.bandwidth() / 2;
        })
        .y(d => {
          return yScale(d.value);
        })
        .curve(d3.curveCatmullRom);

      g.append("path")
        .attr("d", line(data))
        .attr("fill", "none")
        .attr("stroke", "green");

      // let colorZ = d3.scaleOrdinal(d3.schemeDark2)
      // let parseTime = d3.timeParse("%Y-%m-%d")

      // let xScale = d3.scaleBand().range([0, width - padding.left - padding.right])
      // // let dates = this.dataset.flatMap((d) => d.value.map(v => parseTime(v.key)))
      // // console.log(dates);
      // // xScale.domain([d3.min(dates), d3.max(dates)])
      // xScale.domain(data.map(item => item.year))

      // let yScale = d3.scaleLinear().range([height - padding.top - padding.bottom, 0])
      // // yScale.domain([0, d3.max(this.dataset.flatMap((d) => d.value.map(v => v.value))) + 2])
      // yScale.domain([0, d3.max(data, item => item.value)])

      // let xAxis = d3.axisBottom(xScale)
      // // .tickFormat(d => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())
      // let yAxis = d3.axisLeft(yScale)


      // svg.append('g')
      //   .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
      //   .call(xAxis)
      //   .selectAll('text')
      //   .attr('dx', -20)
      //   .attr('dy', 10)
      //   .attr('transform', 'rotate(-20)')
      //   .style('font-weight', 'bold')
      // svg.append('g')
      //   .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      //   .call(yAxis)
      //   .selectAll('text')
      //   .style('font-weight', 'bold')

      // let line = d3.line().x(d => xScale(d.year)).y(d => yScale(d.value))




      // this.dataset.forEach((v, vi) => {
      //   console.log(v, vi);
      //   let tp_x = 0,
      //     tp_y = 0;
      //   svg.append("path")
      //     .attr('d', line(v.value))
      //     .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      //     .attr('fill', 'none')
      //     .attr('stroke', (d, i) => colorZ(vi))
      //     .attr("stroke-width", 2)
      //     .style('stroke-dasharray', function (d, i) {
      //       return d3.select(this).node().getTotalLength();
      //     })
      //     .style('stroke-dashoffset', function (d, i) {
      //       return d3.select(this).node().getTotalLength();
      //     })
      //     .transition()
      //     .duration(2000)
      //     .ease(d3.easePolyOut)
      //     .delay((d, i) => i * 200)
      //     .style('stroke-dashoffset', 0)
      //   svg.selectAll('circle1')
      //     .data(v.value)
      //     .enter()
      //     .append('circle')
      //     .attr('cx', (d, i) => {
      //       let x = xScale(parseTime(d.key))
      //       if (i === v.value.length - 1) tp_x = x - 40
      //       return x
      //     })
      //     .attr('cy', (d, i) => {
      //       let y = yScale(d.value)
      //       if (i === v.value.length - 1) tp_y = y - 10
      //       return y
      //     })
      //     .attr('r', 2)
      //     .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      //     .style("fill", (d, i) => colorZ(vi))
      //     .on("mouseover", (d, i) => {
      //       let g = svg.append('g')
      //         .attr('id', `hoverg${vi}${d.key}${d.value}`)
      //         .attr("transform", "translate(" + (xScale(parseTime(d.key)) - 20) + "," + (yScale(d.value) + 30) + ")")
      //       g.append("rect")
      //         .attr("x", function (d) { return this.parentNode.getBBox().x - 3; })
      //         .attr("y", function (d, i) { return this.parentNode.getBBox().y - 20 })
      //         .attr("width", 110)
      //         .attr("height", 25)
      //         .style("fill", "#fffbf0")
      //       g.append('text')
      //         .text(`${d.key}:${d.value}`)
      //         .style("fill", colorZ(vi))
      //     })
      //     .on("mouseout", (d) => d3.select(`#hoverg${vi}${d.key}${d.value}`).remove())
      //     .transition()
      //     .duration(1500)
      //     .ease(d3.easePolyIn)
      //     .delay((d, i) => i * 200)
      //     .attr('r', 5)

      //   svg.append('text')
      //     .attr('dx', tp_x)
      //     .attr('dy', tp_y)
      //     .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
      //     .text(v.name)
      //     .style("fill", colorZ(vi))
      //     .style('font-weight', 'bold')
      // })
    }
  },
  watch: {
    dataset () {
      this.init();
    }
  }
}
</script>

<style>
</style>