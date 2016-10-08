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

})
