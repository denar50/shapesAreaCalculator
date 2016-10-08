import Circle from 'classes/Circle'
import Square from 'classes/Square'
import Triangle from 'classes/Triangle'
import ShapeDOMInitializer from 'classes/ShapeDOMInitializer'
import domUtils from 'services/domUtils'

const { querySelector } = domUtils

const initApp = () => {
	const shapes = []

	shapes.push([Circle, '.shape-statistics--circle'])
	shapes.push([Square, '.shape-statistics--square'])
	shapes.push([Triangle, '.shape-statistics--triangle'])

	shapes.forEach(([ShapeClass, selector]) => new ShapeDOMInitializer(ShapeClass, querySelector(document, selector)))
}

window.onload = initApp
