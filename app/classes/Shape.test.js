import { expect } from 'chai'
import Shape from 'classes/Shape'
import sinon from 'sinon'
import api from 'services/api'

describe('Shape', () => {
	let shape
	beforeEach(() => {
		shape = new Shape()
	})
	describe('constructor', () => {
		it('Should create a shape with a calculatedAreas area attribute', () => {
			expect(shape).to.have.property('calculatedAreas').that.is.an('array')
			expect(shape.calculatedAreas).to.have.lengthOf(0)
		})

		it('Should have a getStatistics method', () => {
			expect(shape).to.have.property('getStatistics').that.is.a('function')
		})
	})

	describe('getStatistics', () => {
		it('Should return the right statistics when no area has been calculated at all', () => {
			const initialStatistics = shape.getStatistics()
			expect(initialStatistics).to.deep.equal({
				averageArea: 0,
				areasCount: 0,
				lastCalculatedArea: 0
			})
		})
	})

	describe('calculateNewRandomArea', () => {
		let dimensionReturnedByApi = 5
		let calculateNewRandomAreaPromise

		beforeEach(() => {
			sinon.stub(api, 'getDimensions', () => {
				return new Promise((resolve) => {
					resolve(dimensionReturnedByApi)
				})
			})

			shape.dimensions = 1
			shape.calculateArea = (dimension) => {
				return dimension
			}
			calculateNewRandomAreaPromise = shape.calculateNewRandomArea()
		})

		afterEach(() => {
			api.getDimensions.restore()
		})

		it('Should require the rigth amount of dimensions', () => {
			[1, 2, 3].forEach((dimensionsAmount) => {
				shape.dimensions = dimensionsAmount
				shape.calculateNewRandomArea()
				expect(api.getDimensions.calledWith(shape.dimensions)).to.be.true
			})
		})

		it('Should calculate the area of a shape', () => {
			calculateNewRandomAreaPromise.then((calculatedArea) => {
				expect(calculatedArea).to.equal(dimensionReturnedByApi)
			})
		})

		it('Should push this area to the calculated areas array', () => {
			calculateNewRandomAreaPromise.then((calculatedArea) => {
				const { calculatedAreas: { length, [length - 1]: lastCalculatedArea } } = shape
				expect(calculatedArea).to.equal(lastCalculatedArea)
			})
		})
	})
})
