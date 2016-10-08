import { expect } from 'chai'
import api from 'services/api'

const { getDimensions } = api

describe('api', () => {
	describe('getDimensions', () => {
		const numberOfDimensions = 3
		it('Should return an array of new dimensions', (done) => {
			getDimensions(numberOfDimensions).then((arrayOfDimensions) => {
				expect(arrayOfDimensions).to.have.lengthOf(numberOfDimensions)
				done()
			})
		})

		it('Should return an array containing numbers only', (done) => {
			getDimensions(numberOfDimensions).then((arrayOfDimensions) => {
				debugger
				arrayOfDimensions.forEach(dimension => expect(dimension).to.be.a('number'))
				done()
			})
		})
	})
})
