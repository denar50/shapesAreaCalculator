import domUtils from 'services/domUtils'
import sinon from 'sinon'
import { expect } from 'chai'
import Shape from 'classes/Shape'
import ShapeDOMInitializer from 'classes/ShapeDOMInitializer'

describe('ShapeDOMInitializer', () => {
	let avgAreaElement
	let areasCountElement
	let lastCalculatedAreaElement
	let buttonElement
	let shapeDOMInitializer

	before(() => {
		sinon.stub(domUtils, 'querySelector', (element, selector) => {
			const block = 'shape-statistics__'
			switch(selector) {
				case `.${block}refresh-button`:
					return buttonElement
				case `.${block}avg-area`:
					return avgAreaElement
				case `.${block}areas-count`:
					return areasCountElement
				case `.${block}last-calculated-area`:
					return lastCalculatedAreaElement
				default:
					return {}
			}
		})
	})
	beforeEach(() => {
		avgAreaElement = {}
		areasCountElement = {}
		lastCalculatedAreaElement = {}
		buttonElement = {}
		shapeDOMInitializer = new ShapeDOMInitializer(Shape, {})
	})

	it('Should have a shape', () => {
		expect(shapeDOMInitializer.shape).to.be.an.instanceof(Shape)
	})

	it('Should have a statisticsElements object', () => {
		expect(shapeDOMInitializer.statisticsElements).to.deep.equal({
			avgAreaElement,
			areasCountElement,
			lastCalculatedAreaElement
		})
	})

	it('Should have a buttonElement', () => {
		expect(shapeDOMInitializer.buttonElement).to.deep.equal(buttonElement)
	})

	it('Should have set the onclick event on the button element that refreshes the statistics of the shape', () => {
		const { shape, statisticsElements, buttonElement } = shapeDOMInitializer
		sinon.spy(ShapeDOMInitializer.prototype, 'onShapeClick')
		buttonElement.onclick()
		expect(shapeDOMInitializer.onShapeClick.calledWith(shape, statisticsElements, buttonElement))
		ShapeDOMInitializer.prototype.onShapeClick.restore()
	})

	describe('onShapeClick', () => {
		let calculateNewRandomAreaPromise
		let statisticsMock
		beforeEach(() => {
			statisticsMock = {
				averageArea: 1,
				areasCount:2,
				lastCalculatedArea: 3
			}

			sinon.stub(Shape.prototype, 'getStatistics', () => {
				return statisticsMock
			})
			const { shape, statisticsElements, buttonElement } = shapeDOMInitializer
			// We stub the shape instead of the prototype because the function is defined in the object itself (it was "promesified")
			sinon.stub(shape, 'calculateNewRandomArea', () => {
				calculateNewRandomAreaPromise = new Promise((resolve, reject) => {
					resolve()
				})
				return calculateNewRandomAreaPromise
			})
			shapeDOMInitializer.onShapeClick(shape, statisticsElements, buttonElement)
		})
		afterEach(() => {
			Shape.prototype.getStatistics.restore()
		})

		it('Should disable and enable the button to prevent extra clicks when the area of the shape is being calculated', (done) => {
			expect(buttonElement.disabled).to.be.true
			calculateNewRandomAreaPromise.then(() => {
				expect(buttonElement.disabled).to.be.false
				done()
			})
		})

		it('Should update the avgAreaElement with the new average area', (done) => {
			calculateNewRandomAreaPromise.then(() => {
				expect(avgAreaElement.innerHTML).to.equal(statisticsMock.averageArea)
				done()
			})
		})

		it('Should update the areasCount with the new areas count', (done) => {
			calculateNewRandomAreaPromise.then(() => {
				expect(areasCountElement.innerHTML).to.equal(statisticsMock.areasCount)
				done()
			})
		})

		it('Should update the lastCalculatedAreaElement with the new lastCalculatedArea', (done) => {
			calculateNewRandomAreaPromise.then(() => {
				expect(lastCalculatedAreaElement.innerHTML).to.equal(statisticsMock.lastCalculatedArea)
				done()
			})
		})
	})
})
