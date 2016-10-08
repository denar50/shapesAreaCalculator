import { expect } from 'chai'
import Triangle from 'classes/Triangle'
import sinon from 'sinon'
import api from 'services/api'

describe('Triangle', () => {
	let triangle

	beforeEach(() => {
		triangle = new Triangle()
	})
	describe('constructor', () => {
		it('Should create a triangle with a calculatedAreas area attribute', () => {
			expect(triangle).to.have.property('calculatedAreas').that.is.an('array')
			expect(triangle.calculatedAreas).to.have.lengthOf(0)
		})

		it('Should have a calculateNewRandomArea method', () => {
			expect(triangle).to.have.property('calculateNewRandomArea').that.is.a('function')
		})

		it('Should have a getStatistics method', () => {
			expect(triangle).to.have.property('getStatistics').that.is.a('function')
		})

		it('Should have a calculateArea method', () => {
			expect(triangle).to.have.property('calculateArea').that.is.a('function')
		})
	})

	describe('calculateArea', () => {
		it('Should calculate the right area for the given dimensions', () => {
			[[1, 2], [3, 4], [5, 6]].forEach(([base, height]) => expect(triangle.calculateArea([base, height])).to.equal(base * height/2))
		})
	})
})
