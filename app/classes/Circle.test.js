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
	})

	describe('calculateNewRandomArea', () => {
		let randomDimension
		let calculateNewRandomAreaPromise
		before(() => {
			sinon.stub(api, 'getDimension', () => {
				return new Promise((resolve) => {
					randomDimension = Math.random() * 10
					resolve(randomDimension)
				})
			})
		})

		after(() => {
			api.getDimension.restore()
		})

		beforeEach(() => {
			calculateNewRandomAreaPromise = circle.calculateNewRandomArea()
		})

		it('Should calculate the area of a circle', () => {
			calculateNewRandomAreaPromise.then((calculatedArea) => {
				expect(calculatedArea).to.equal(Math.PI * Math.pow(randomDimension))
			})
		})

		it('Should push this area to the calculated areas array', () => {
			calculateNewRandomAreaPromise.then((calculatedArea) => {
				const { calculatedAreas: { length, [length - 1]: lastCalculatedArea } } = cicle
				expect(calculatedArea).to.equal(lastCalculatedArea)
			})
		})
	})


})
