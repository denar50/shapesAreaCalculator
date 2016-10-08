import Circle from 'classes/Circle'
import Square from 'classes/Square'
import Triangle from 'classes/Triangle'
import ShapeDOMInitializer from 'classes/ShapeDOMInitializer'
import domUtils from 'services/domUtils'

const { querySelector } = domUtils

const initApp = () => {
	const shapes = []

	shapes.push([Circle, querySelector(document, '.shape-statistics--circle')])
	shapes.push([Square, querySelector(document, '.shape-statistics--square')])
	shapes.push([Triangle, querySelector(document, '.shape-statistics--triangle')])

	shapes.forEach(([ShapeClass, domElement]) => new ShapeDOMInitializer(ShapeClass, domElement))
}

window.onload = initApp
