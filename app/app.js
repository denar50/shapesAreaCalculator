import Circle from 'classes/Circle'
import domUtils from 'services/domUtils'
import { truncateNumber } from 'services/utils'

const { querySelector } = domUtils

export function onShapeClick(shape, statisticsElements, event){
	const { target: buttonElement } = event
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

export const shapeCreator = (ShapeClass, domElement) => {
	const newShape = new ShapeClass()
	const block = 'shape-statistics__'
	const buttonElement = querySelector(domElement,  `.${block}refresh-button`)
	const statisticsElements = {
		avgAreaElement: querySelector(domElement, `.${block}avg-area`),
		areasCountElement: querySelector(domElement, `.${block}areas-count`),
		lastCalculatedAreaElement: querySelector(domElement, `.${block}last-calculated-area`)
	}
	buttonElement.onclick = onShapeClick.bind(null, newShape, statisticsElements)
}

export const initApp = () => {
	shapeCreator(Circle, querySelector(document, '.shape-statistics--circle'))
}

window.onload = initApp
