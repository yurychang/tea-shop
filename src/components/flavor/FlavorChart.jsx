import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectByFlavor } from 'actions/flavor'
import * as d3 from 'd3'

function drawChart(data, targets, onClick) {
  const full = (len, el) => {
    let newArray = []
    for (let i = 0; i < len; i++) {
      newArray.push(el)
    }
    return newArray
  }

  const svg = d3.select('#flavorChart')
  const svgBox = svg.node().getBoundingClientRect()
  const width = (svgBox.width - 40) / 2
  const radius = [width * 0.2, width * 0.58 - 1, width * 0.58, width]

  const svgSize = {
    width: radius[3] * 2,
    height: radius[3] * 2,
  }
  const center = {
    x: radius[3] + 20,
    y: radius[3] + 20,
  }
  const colors = [
    '#F3F3B8',
    '#EFA593',
    '#EBDCD1',
    '#F7DFE3',
    '#A08E8E',
    '#A2A0A0',
    '#A4C56D',
  ]
  // const innerWidth = data.map(el => el.outerflavors.length)
  d3.select('#innerPie').remove()
  svg.append('g').attr('id', 'innerPie')
  svg.attr('width', svgSize.width).attr('height', svgSize.height + 40)

  data.sort((a, b) => a.sortOrder - b.sortOrder)

  const innerPies = d3
    .pie()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .value(d => d.outerflavors.length)(data)

  const innerData = data.map((el, i) => {
    return {
      ...el,
      ...innerPies[i],
      color: colors[i],
    }
  })

  // calculation of pie
  const innerArc = d3
    .arc()
    .innerRadius(radius[0])
    .outerRadius(radius[1])
    .padAngle(Math.PI / 360)

  const outerArc = d3
    .arc()
    .innerRadius(radius[2])
    .outerRadius(radius[3])
    .padAngle(Math.PI / 720)

  const drawCircleOutOfArc = arc => sel => d => {
    const innerRadius = arc.outerRadius()()
    const circleArc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(innerRadius + 30)
    const centroid = circleArc.centroid(d)
    sel
      .append('circle')
      .attr('cx', centroid[0])
      .attr('cy', centroid[1])
      .attr('r', 5)
  }

  const drawTextOnCentroid = arc => sel => d =>
    sel
      .append('text')
      .text(d => d.name)
      .each(function(d) {
        const currentNode = d3.select(this)
        const centroid = arc.centroid(d)
        const x = centroid[0]
        const y = centroid[1]
        const width = currentNode.node().getBBox().width
        const height = currentNode.node().getBBox().height
        const angle =
          (((d.startAngle + d.endAngle) / 2) * 360) / (2 * Math.PI) + 90
        currentNode
          .attr('x', x - width / 2)
          .attr('y', y + height / 4)
          .attr('fill', '#555')
          .attr('class', 'text')
          .call(sel => {
            if (angle > 90 && angle < 270) {
              sel.attr('transform', `rotate(${angle + 180}, ${x}, ${y})`)
            } else {
              sel.attr('transform', `rotate(${angle}, ${x}, ${y})`)
            }
          })
      })

  // inner pie
  svg
    .select('#innerPie')
    .attr('transform', `translate(${center.x},${center.y})`)
    .selectAll('g')
    .data(innerData)
    .enter()
    .append('g')
    .each(function(d) {
      const innerGroup = d3.select(this)
      innerGroup
        .append('path')
        .datum(d)
        .attr('d', d => innerArc(d))
        .attr('class', 'inner')
        .attr('fill', d => d.color)
        .each(function(d) {
          drawTextOnCentroid(innerArc)(innerGroup)(d)
            .style('font-size', '18px')
            .style('opacity', '.8')
          const outerPies = d3
            .pie()
            .startAngle(d.startAngle)
            .endAngle(d.endAngle)(full(d.outerflavors.length, 1))
          const outerData = d.outerflavors.map((el, i) => {
            return {
              ...el,
              ...outerPies[i],
              color: d.color,
            }
          })
          const outerGroup = innerGroup
            .selectAll('.outer')
            .data(outerData)
            .enter()
            .append('g')
            .attr('class', 'outer flavor-link')

          // outer Click
          outerGroup
            .on('click', function(d, i, nodes) {
              onClick(d.id)
            })
            .filter((d) => {
              for (const key in targets) {
                if (d.id === targets[key]) {
                  return true
                }
              }
            })
            .attr('class', 'active')
            .each(function(d) {
              d3.select(this).call(sel => drawCircleOutOfArc(outerArc)(sel)(d))
            })
          outerGroup
            .append('path')
            .attr('d', d => outerArc(d))
            .attr('fill', d => d.color)

          drawTextOnCentroid(outerArc)(outerGroup)(d).style('font-size', '14px')
        })
    })
}

function FlavorChart({ flavors, targetTeaFlavors, selectedFlavor, selectByFlavor }) {
  const targetFlavors = {}
  if (targetTeaFlavors.length === 1) {
    targetFlavors.frontId = targetTeaFlavors[0].frontId
    targetFlavors.midId = targetTeaFlavors[0].midId
    targetFlavors.endId = targetTeaFlavors[0].endId
  } else if (targetTeaFlavors.length > 1 ) {
    targetFlavors.frontId = selectedFlavor
  }
  useEffect(() => {
    if (flavors) {
      drawChart(flavors, targetFlavors, selectByFlavor)
    }
  }, [flavors, targetFlavors])
  return (
    <svg id="flavorChart" className="flavor w-100">
      <g id="innerPie"></g>
    </svg>
  )
}

const mapStateToProps = ({ flavor }) => {
  return { ...flavor }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectByFlavor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlavorChart)
