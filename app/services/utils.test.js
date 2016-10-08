import { getAverageNumber, promesifier, truncateNumber } from 'services/utils'
import { expect } from 'chai'
import sinon from 'sinon'

describe('utils', () => {
	describe('getAverageNumber', () => {
		it('Should return the average of a numbers array', () => {
			expect(getAverageNumber([3, 6, 9])).to.equal(( 3 + 6 + 9 ) / 3)
		})

		it('Should return the zero if the numbers array is empty', () => {
			expect(getAverageNumber([])).to.equal(0)
		})
	})

	describe('truncateNumber', () => {
		it('Should truncate a number', () => {
			expect(truncateNumber(45.27849, 1)).to.equal(45.2)
			expect(truncateNumber(45.27849, 2)).to.equal(45.27)
			expect(truncateNumber(45.27849, 3)).to.equal(45.278)
			expect(truncateNumber(45.27849, 4)).to.equal(45.2784)
			expect(truncateNumber(45.27849, 5)).to.equal(45.27849)
		})

		it('Should return the same number when the amount of decimals required is greater than the decimals that the numbr has', () => {
			expect(truncateNumber(45.27, 100)).to.equal(45.27)
			expect(truncateNumber(45, 100)).to.equal(45)
		})
	})

	describe('promesifier', () => {
		let originalFunction
		let promesifiedFunction
		beforeEach(() => {

		})

		it('Should wrap a function so that when it is executed it returns a promise', () => {
			promesifiedFunction = promesifier(() => {})
			expect(promesifiedFunction()).to.be.an.instanceof(Promise)
		})

		it('Should call the original function with the parameters the promesifiedFunction is executed', (done) => {
			originalFunction = sinon.spy(function(){
				const resolve = arguments[arguments.length - 2]
				resolve()
			})
			promesifiedFunction = promesifier(originalFunction)
			const anObjectReference = {}
			promesifiedFunction('foo', 'bar', anObjectReference).then(() => {
				expect(originalFunction.calledWith('foo', 'bar', anObjectReference)).to.be.true
				done()
			})
		})
	})
})
