import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

const DATA = [
   
  {
      Scenario2_RoofsOnly_PotentialSolarHeat_GWh: 36.25,
      MunicipalityName: "Yverdon-les-Bains"
  },
  {
      Scenario2_RoofsOnly_PotentialSolarHeat_GWh: 36.86,
      MunicipalityName: "Montreux"
  }
 
 
]

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.Scenario2_RoofsOnly_PotentialSolarHeat_GWh)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.Scenario2_RoofsOnly_PotentialSolarHeat_GWh))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.Scenario2_RoofsOnly_PotentialSolarHeat_GWh))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.MunicipalityName)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d}Scenario2_RoofsOnly_PotentialSolarHeat_GWh`)
  .ticks(3)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT -3})`)
  .call(axisY)
