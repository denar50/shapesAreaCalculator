import { expect } from 'chai'
import Circle from 'classes/Circle'
import sinon from 'sinon'
import api from 'services/api'

describe('Circle', () => {
	let circle

	beforeEach(() => {
		circle = new Circle()
	})
	describe('constructor', () => {
		it('Should create a circle with a calculatedAreas area attribute', () => {
			expect(circle).to.have.property('calculatedAreas').that.is.an('array')
			expect(circle.calculatedAreas).to.have.lengthOf(0)
		})

		it('Should have a calculateNewRandomArea method', () => {
			expect(circle).to.have.property('calculateNewRandomArea').that.is.a('function')
		})

		it('Should have a getStatistics method', () => {
			expect(circle).to.have.property('getStatistics').that.is.a('function')
		})

		it('Should have a calculateArea method', () => {
			expect(circle).to.have.property('calculateArea').that.is.a('function')
		})
	})

	describe('calculateArea', () => {
		it('Should calculate the right area for the given dimensions', () => {
			[5, 6, 7].forEach(dimension => expect(circle.calculateArea(dimension)).to.equal(Math.PI * Math.pow(dimension,2)))
		})
	})
})
