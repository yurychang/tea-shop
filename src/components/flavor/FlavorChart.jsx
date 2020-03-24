import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFlavor } from 'actions/flavor'
import * as d3 from 'd3'

function drawChart(data) {
  // {
  //   inner: [
  //     {
    //      color,
        // text,
  //       ...data,
            // outer: [
            //   { text, ...data }
            // ]
  //     }
  //   ]
  // }
  const full = (len, el) => {
    let newArray = []
    for (let i = 0; i < len; i++) {
      newArray.push(el)
    }
    return newArray
  }

  const svgSize = {
    width: '500',
    height: '500',
  }

  const center = {
    x: 250,
    y: 250,
  }

  const innerRadius = [80, 170]
  const outerRadius = [170, 250]
  // const innerWidth = [1, 1, 3, 2, 5, 8, 3, 13]

  const childrenTotal = full(36, 1)
  const svg = d3.select('#flavorChart')
  svg.attr('width', svgSize.width).attr('height', svgSize.height)

  // 劃分角度
  const innerPies = d3.pie().sort((a, b) => 1)(innerWidth)
  const outerPies = d3.pie().sort((a, b) => 1)(childrenTotal)

  // calculation of pie
  const innerArc = d3
    .arc()
    .innerRadius(innerRadius[0])
    .outerRadius(innerRadius[1])
    .padAngle(Math.PI / 1080)

  const outerArc = d3
    .arc()
    .innerRadius(outerRadius[0])
    .outerRadius(outerRadius[1])
    .padAngle(Math.PI / 1080)

  // line calculation of alert
  const alertLine = d3.line()

  // inner pie
  svg.select('#innerPie')
    .selectAll('path')
    .data(innerPies)
    .enter()
    .append('path')
    .attr('d', (d, i) => innerArc(innerPies[i]))
    .attr('transform', `translate(${center.x},${center.y})`)

  // outter pie
  svg.select('g#outerPie')
    .selectAll('g')
    .data(outerPies)
    .enter()
    .append('g')
    .attr('transform', `translate(${center.x},${center.y})`)
    .each(function(d) {
      const centroid = outerArc.centroid(d)
      const angle =
        (((d.startAngle + d.endAngle) / 2) * 360) / (2 * Math.PI) + 90
      const x = centroid[0]
      const y = centroid[1]
      d3.select(this)
        .append('path')
        .attr('d', outerArc(d))
      d3.select(this)
        .append('text')
        .datum(d)
        .attr('x', x - 12)
        .attr('y', y + 5)
        .attr('fill', 'white')
        .text('123')
        .call(sel => {
          if (angle > 90 && angle < 270) {
            sel.attr('transform', `rotate(${angle + 180}, ${x}, ${y})`)
          } else {
            sel.attr('transform', `rotate(${angle}, ${x}, ${y})`)
          }
        })
    })
    .on('click', function(d, i, nodes) {
      const centroid = outerArc.centroid(d)
      d3.select(this)
        .style('opacity', '.5')
        .append('path')
        .attr('stroke', '#555')
        .attr('d', alertLine([[0, 0], centroid]))
      d3.select(this)
        .append('circle')
        .attr('cx', centroid[0])
        .attr('cy', centroid[1])
        .attr('r', 10)
        .attr('stroke', '#fff')
        .attr('fill', 'transparent')
    })
}
function FlavorChart({ flavor, fetchFlavor }) {
  useEffect(() => {
    drawChart()
  }, [])
  return (
    <div>
      <svg id="flavorChart">
        <g id="innerPie" fill="#66a5c2"></g>
        <g id="outerPie"></g>
      </svg>
    </div>
  )
}

const mapStateToProps = ({ flavor }) => {
  return { flavor }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFlavor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlavorChart)
