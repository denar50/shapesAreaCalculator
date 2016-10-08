import domUtils from 'services/domUtils'
import { truncateNumber } from 'services/utils'

export default class ShapeDOMInitializer {
	constructor(ShapeClass, domElement) {
		const { querySelector } = domUtils
	 	this.shape = new ShapeClass()
		const block = 'shape-statistics__'
		this.buttonElement = querySelector(domElement,  `.${block}refresh-button`)
		this.statisticsElements = {
			avgAreaElement: querySelector(domElement, `.${block}avg-area`),
			areasCountElement: querySelector(domElement, `.${block}areas-count`),
			lastCalculatedAreaElement: querySelector(domElement, `.${block}last-calculated-area`)
		}
		this.buttonElement.onclick = () => {
			const { shape, statisticsElements, buttonElement } = this
			this.onShapeClick(shape, statisticsElements, buttonElement)
		}
	}

	onShapeClick(shape, statisticsElements, buttonElement){
		buttonElement.disabled = true
		const { avgAreaElement, areasCountElement, lastCalculatedAreaElement } = statisticsElements
		shape.calculateNewRandomArea().then(() => {
			const { averageArea, areasCount, lastCalculatedArea } = shape.getStatistics()
			avgAreaElement.innerHTML = truncateNumber(averageArea, 2)
			areasCountElement.innerHTML = areasCount
			lastCalculatedAreaElement.innerHTML = truncateNumber(lastCalculatedArea, 2)
			buttonElement.disabled = false
		})
	}
}
