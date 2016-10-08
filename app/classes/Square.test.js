import { expect } from 'chai'
import Square from 'classes/Square'
import sinon from 'sinon'
import api from 'services/api'

describe('Square', () => {
	let square

	beforeEach(() => {
		square = new Square()
	})
	describe('constructor', () => {
		it('Should create a square with a calculatedAreas area attribute', () => {
			expect(square).to.have.property('calculatedAreas').that.is.an('array')
			expect(square.calculatedAreas).to.have.lengthOf(0)
		})

		it('Should have a calculateNewRandomArea method', () => {
			expect(square).to.have.property('calculateNewRandomArea').that.is.a('function')
		})

		it('Should have a getStatistics method', () => {
			expect(square).to.have.property('getStatistics').that.is.a('function')
		})
	})

	describe('calculateArea', () => {
		it('Should calculate the right area for the given dimensions', () => {
			[[1, 2], [3, 4], [5, 6]].forEach(([width, height]) => expect(square.calculateArea([width, height])).to.equal(width * height))
		})
	})
})
